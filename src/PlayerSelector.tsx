import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

interface State {
  inputValue: string
}

interface Props {
	updatePlayers: Function
}

const getPlayers = (search : string, callback : Function) => {
	axios.get(`https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${search}/20`).then((response) => {
		
		var options = response.data.suggestions.map((player : any) => {
			var playerData = player.split('|');
			return {
				value: playerData[0],
				label: `${playerData[2]} ${playerData[1]}`
			}
		});

		callback(options);
	});	
}

export default class PlayerSelector extends Component<Props, State> {
	state = { inputValue: '' };

	render() {
    	return (
      		<AsyncSelect
        		isMulti
				loadOptions={getPlayers}
				placeholder="Search for a player..."
				onChange={(selectedOptions) => {
					if (selectedOptions) {
						this.props.updatePlayers(selectedOptions.map((x : any) => x.value));
					}					
				}}
      		/>
    	);
  	}
}
