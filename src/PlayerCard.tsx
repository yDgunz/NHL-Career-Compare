import React, { Component } from 'react';
import { Player } from './CompareCareer';
import { Table, TableRow, TableCell, TableHead } from '@material-ui/core';


interface Props {
	player: Player
}

class PlayerCard extends Component<Props,any> {

	constructor(props : any) {
		super(props);	
	}

	render() {		
		return (			
			<div>
				<h3>{this.props.player.name}</h3>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Stat</TableCell>
							<TableCell align="right">Reg Season</TableCell>
							<TableCell align="right">Playoffs</TableCell>
							<TableCell align="right">Adjusted*</TableCell>
						</TableRow>
					</TableHead>
					<TableRow>
						<TableCell>Games</TableCell>
						<TableCell align="right">{this.props.player.careerStats.games.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerPlayoffStats.games.toLocaleString()}</TableCell>
						<TableCell align="right">N/A</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Points</TableCell>
						<TableCell align="right">{this.props.player.careerStats.points.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerPlayoffStats.points.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerStats.adjustedPoints.toLocaleString()}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Goals</TableCell>
						<TableCell align="right">{this.props.player.careerStats.goals.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerPlayoffStats.goals.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerStats.adjustedGoals.toLocaleString()}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Assists</TableCell>
						<TableCell align="right">{this.props.player.careerStats.assists.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerPlayoffStats.assists.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerStats.adjustedAssists.toLocaleString()}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>+/-</TableCell>
						<TableCell align="right">{this.props.player.careerStats.plusMinus?.toLocaleString() ?? "N/A"}</TableCell>
						<TableCell align="right">{this.props.player.careerPlayoffStats.plusMinus?.toLocaleString() ?? "N/A"}</TableCell>
						<TableCell align="right">N/A</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>PIM</TableCell>
						<TableCell align="right">{this.props.player.careerStats.pim.toLocaleString()}</TableCell>
						<TableCell align="right">{this.props.player.careerPlayoffStats.pim.toLocaleString()}</TableCell>
						<TableCell align="right">N/A</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Shots</TableCell>
						<TableCell align="right">{this.props.player.careerStats.shots?.toLocaleString() ?? "N/A"}</TableCell>
						<TableCell align="right">{this.props.player.careerPlayoffStats.shots?.toLocaleString() ?? "N/A"}</TableCell>
						<TableCell align="right">N/A</TableCell>
					</TableRow>
				</Table>
			</div>			
		)	
	}
}

export default PlayerCard;