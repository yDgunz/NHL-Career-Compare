const axios = require('axios');
const fs = require('fs');

var players = {
	lastUpdated: Date.now(),
	players: []
};

const findPlayers = (charCode) => {	

	var char = String.fromCharCode(charCode);

	if (charCode == 91) {

		fs.writeFileSync('../src/players.json', JSON.stringify(players));

	} else {
		axios.get(`https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${char}/9999`).then((response) => {
		
			console.log(`Found ${response.data.suggestions.length} players for letter ${char}`)
		
			var playersAdded = 0;

			response.data.suggestions.forEach((p) => {
				var player = p.split('|');
				var id = player[0];
				var name = player[2] + ' ' + player[1];
		
				if (!players.players.find((x) => (x.id === id))) {
					players.players.push({
						id: id,
						name: name
					});
					playersAdded++;
				}
			});
			console.log(`Added ${playersAdded}`);

			findPlayers(charCode+1);

		});
	}	

}

findPlayers(65);