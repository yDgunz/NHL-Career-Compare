import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Player } from './CompareCareer';
import { Grid, Paper, Checkbox } from '@material-ui/core';
import Select from 'react-select';

interface Props {
	players: Player[]
}

interface State {
	stat: string;
	aggregate: boolean;
}

const chartColors = [
	['rgb(255, 99, 132)'],
	['rgb(54, 162, 235)'],	
	['rgb(255, 205, 86)'],
	['rgb(75, 192, 192)'],
	['rgb(255, 159, 64)'],
	['rgb(153, 102, 255)'],
	['rgb(201, 203, 207)']
];

class CareerTrends extends Component<Props,any> {	

	constructor(props : any) {
		super(props);
		
		this.state = {
			stat: "goals",
			aggregate: true	
		};

	}

	render() {		

		var maxSeasons = this.props.players
							.map((p) => (p.seasonStats.length))
							.reduce((a,b) => (a > b ? a : b));

		var seasonLabels = [];
		for(var i = 1; i <= maxSeasons; i++) {
			seasonLabels.push(i);
		}					

		var data = {
			labels: seasonLabels,
			datasets: this.props.players.map((player, playerIx) => {
				var color = chartColors[playerIx % chartColors.length];
				var seasonStats : number[] = [];
				player.seasonStats.forEach((season : any, seasonIx) => {
					var stat = season[this.state.stat];
					if (seasonIx == 0 || !this.state.aggregate) {
						seasonStats.push(stat);
					} else {
						seasonStats.push(seasonStats[seasonIx-1]+stat);
					}
				});
				return {
					label: `${player.name}`,
					data: seasonStats,
					fill: false,
					backgroundColor: color,
					borderColor: color
				}
			})			
		};

		var options =  {
			scales: {
            	yAxes: [{                	
					scaleLabel: {
						display: true,
						labelString: this.state.stat.charAt(0).toUpperCase() + this.state.stat.slice(1)
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Season #'
					}
				}]
			}
		};

		return (
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					<Paper><Line height={80} data={data} options={options}></Line></Paper>
				</Grid>
				<Grid item xs={12} md={3}>
					<Select
						defaultValue={{value: 'goals', label: 'Goals'}}
						options={
							[
								{value: 'games', label: 'Games'},
								{value: 'points', label: 'Points'},
								{value: 'goals', label: 'Goals'},
								{value: 'assists', label: 'Assists'},
								{value: 'plusMinus', label: '+/-'},
								{value: 'pim', label: 'PIM'},
								{value: 'shots', label: 'Shots'},
								{value: 'adjustedPoints', label: 'Adjusted Points'},
								{value: 'adjustedGoals', label: 'Adjusted Goals'},
								{value: 'adjustedAssists', label: 'Adjusted Assists'}
							]
						}
						onChange={(selectedOption : any) => {
							this.setState({ stat: selectedOption.value });
						}}
					/>
					Aggregate
					<Checkbox
						checked={this.state.aggregate}
						onChange={(e : any) => {
							this.setState({aggregate: e.target.checked});
						}}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default CareerTrends;