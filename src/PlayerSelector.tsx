import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import * as players from './players.json';

interface State {
  inputValue: string
}

interface Props {
	updatePlayers: Function
}

const getPlayers = (search : string, callback : Function) => {	
	if (search.length < 2) {
		return callback([]);
	} else {
		search = search.toLowerCase();
		var foundPlayers = players.players.filter((x) => (x.name.toLowerCase().indexOf(search) > -1));
		foundPlayers.splice(10);
		callback(foundPlayers.map((x : any) => ({value: x.id, label: x.name})));
	}
	
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
