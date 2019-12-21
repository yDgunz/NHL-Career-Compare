import React, { Component, ChangeEvent, FormEvent } from 'react';
import axios  from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlayerCard from './PlayerCard';
import CareerTrends from './CareerTrends';
import PlayerSelector from './PlayerSelector';
import { GetGamesInSeason, GetLeagueAverageForSeason } from './LeagueInfo';

export interface Stats {
	period: string
	games: number,
	points: number,
	goals: number,
	assists: number,
	plusMinus: number,
	pim: number,
	shots: number,
	adjustedPoints: number,
	adjustedGoals: number,
	adjustedAssists: number
}

export interface Player {
	id: number,
	name: string,
	number: number,
	birthDate: string,
	country: string,
	shoots: string,	
	careerStats: Stats,
	careerPlayoffStats: Stats,
	seasonStats: Stats[],
	playoffStats: Stats[]
}

interface State {
	players: Player[],
}

const getStats = (statsFromApi : any) : Stats => {
	return {
		period: 'career', 
		games: statsFromApi.games,
		points: statsFromApi.points,
		goals: statsFromApi.goals,
		assists: statsFromApi.assists,
		plusMinus: statsFromApi.plusMinus,
		pim: statsFromApi.pim,
		shots: statsFromApi.shots,
		adjustedPoints: 0,
		adjustedGoals: 0,
		adjustedAssists: 0			
	};
}

const getPlayerStats = async (playerId: number) : Promise<Player> => {
	var apiResponse = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}?expand=person.stats&stats=yearByYear,yearByYearPlayoffs,careerRegularSeason,careerPlayoffs`);
	
	var playerData = apiResponse.data.people[0];
	
	var player : Player = {
		id: playerId,
		name: playerData.fullName,
		number: playerData.primaryNumber,
		birthDate: playerData.birthDate,
		country: playerData.nationality,
		shoots: playerData.shootsCatches,	
		careerStats: getStats(playerData.stats[2].splits[0].stat),
		careerPlayoffStats: playerData.stats[3].splits [0] !== undefined ? 
								getStats(playerData.stats[3].splits[0].stat) :
								{
									games: 0, points: 0, goals: 0, assists: 0, period: "", adjustedAssists: 0, adjustedGoals: 0, adjustedPoints: 0, pim: 0, plusMinus: 0, shots: 0
								},							
		seasonStats: [],
		playoffStats: []
	};

	var seasons = apiResponse.data.people[0].stats[0].splits.filter((x : any) => (x.league.id === 133));

	player.seasonStats = seasons.map((x : any) => {
		var gamesFactor = 82.0 / GetGamesInSeason(x.season);
		var leagueAverage = GetLeagueAverageForSeason(x.season);
		var goalsEraFactor = 6.0 / ( (leagueAverage.games*leagueAverage.averageGoalsPerGame - x.stat.goals)/leagueAverage.games );
		var assistsEraFactor = 10.0 / ( (leagueAverage.games*leagueAverage.averageGoalsPerGame*1.67 - x.stat.assists)/leagueAverage.games );

		var seasonStats = getStats(x.stat);
		
		seasonStats.adjustedGoals = Math.round(gamesFactor * goalsEraFactor * seasonStats.goals);
		seasonStats.adjustedAssists = Math.round(gamesFactor * assistsEraFactor * seasonStats.assists);
		seasonStats.adjustedPoints = Math.round(seasonStats.adjustedGoals + seasonStats.adjustedAssists);

		player.careerStats.adjustedGoals += seasonStats.adjustedGoals;
		player.careerStats.adjustedAssists += seasonStats.adjustedAssists;
		player.careerStats.adjustedPoints += seasonStats.adjustedPoints;

		return seasonStats;
	});

	return player;
}

class CompareCareer extends Component<any,State> {

	constructor(props : any) {
		super(props);

		this.state = {
			players: []
		}

		this.updatePlayers = this.updatePlayers.bind(this);
	}

	private async updatePlayers(playerIds : number[]) {
		var players : Player[] = [];
		for (var i = 0; i < playerIds.length; i++) {
			players.push(await getPlayerStats(playerIds[i]));
		}			
		this.setState({players: players});
	}

	async componentDidMount() {				
		this.updatePlayers([8471214, 8447400]);
	}

	render() {
		var data = <div>Loading...</div>;

		if (this.state.players.length > 0)  {
			data = (
				<div>
					<CareerTrends players={this.state.players}></CareerTrends>
					<Grid container spacing={3}>
						{this.state.players.map((p,ix,arr) => {
							var gridSize : 12|6|4|3 = arr.length == 1 ? 12 : arr.length == 2 ? 6 : arr.length == 3 ? 4 : 3;
							return (
								<Grid item md={gridSize} xs={12}>
									<Paper>
										<PlayerCard player={p}></PlayerCard>
									</Paper>						
								</Grid>
							);
						})}
					</Grid>					
				</div>
			);
		}

		return (
			<div>
				<Grid container justify="space-evenly" alignItems="center" spacing={3}>
					<Grid item xs={12} md={3}>
						<h1>NHL Career Compare</h1>
					</Grid>
					<Grid item xs={12} md={9}>
						<PlayerSelector updatePlayers={this.updatePlayers}></PlayerSelector>
					</Grid>
				</Grid>				
				{data}
				<Grid item xs={12}>
					<Paper>
						<p>* Adjusted statistics are calculated largely according to the <a href="https://www.hockey-reference.com/about/adjusted_stats.html">rules specified by Hockey Reference</a>, with the exception of adjusting by roster size.</p>
						<p>All data is retrieved from the public NHL API or Hockey Reference.</p>
					</Paper>
				</Grid>
			</div>
		);
	}
}

export default CompareCareer;