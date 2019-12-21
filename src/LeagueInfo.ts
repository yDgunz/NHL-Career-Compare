const GamesPerSeason = [
	{seasons:'19171918', games: 22},
	{seasons:'19181919', games: 18},
	{seasons:'19191924', games: 24},
	{seasons:'19241925', games: 30},
	{seasons:'19251926', games: 36},
	{seasons:'19261931', games: 44},
	{seasons:'19311932', games: 48},
	{seasons:'19321935', games: 48},
	{seasons:'19351938', games: 48},
	{seasons:'19381942', games: 48},
	{seasons:'19421946', games: 50},
	{seasons:'19461949', games: 60},
	{seasons:'19491967', games: 70},
	{seasons:'19671968', games: 74},
	{seasons:'19681970', games: 76},
	{seasons:'19701972', games: 78},
	{seasons:'19721974', games: 78},
	{seasons:'19741978', games: 80},
	{seasons:'19781979', games: 80},
	{seasons:'19791991', games: 80},
	{seasons:'19911992', games: 80},
	{seasons:'19921993', games: 84},
	{seasons:'19931994', games: 84},
	{seasons:'19941995', games: 48},
	{seasons:'19951998', games: 82},
	{seasons:'19982000', games: 82},
	{seasons:'20002004', games: 82},
	{seasons:'20042005', games: 0},
	{seasons:'20052012', games: 82},
	{seasons:'20122013', games: 48},
	{seasons:'20132017', games: 82},
	{seasons:'20172018', games: 82},
	{seasons:'20182019', games: 82},
	{seasons:'20192020', games: 82}	
];

interface LeagueAverage {
	season: string,
	games: number,
	averageGoalsPerGame: number
};

const LeagueAverages : LeagueAverage[] = [
	{season:'20192020', games: 537, averageGoalsPerGame: 6.02},
	{season:'20182019', games: 1271, averageGoalsPerGame: 6.02},
	{season:'20172018', games: 1271, averageGoalsPerGame: 5.94},
	{season:'20162017', games: 1230, averageGoalsPerGame: 5.54},
	{season:'20152016', games: 1230, averageGoalsPerGame: 5.42},
	{season:'20142015', games: 1230, averageGoalsPerGame: 5.46},
	{season:'20132014', games: 1230, averageGoalsPerGame: 5.48},
	{season:'20122013', games: 720, averageGoalsPerGame: 5.44},
	{season:'20112012', games: 1230, averageGoalsPerGame: 5.46},
	{season:'20102011', games: 1230, averageGoalsPerGame: 5.58},
	{season:'20092010', games: 1230, averageGoalsPerGame: 5.68},
	{season:'20082009', games: 1230, averageGoalsPerGame: 5.82},
	{season:'20072008', games: 1230, averageGoalsPerGame: 5.56},
	{season:'20062007', games: 1230, averageGoalsPerGame: 5.9},
	{season:'20052006', games: 1230, averageGoalsPerGame: 6.16},
	{season:'20032004', games: 1230, averageGoalsPerGame: 5.14},
	{season:'20022003', games: 1230, averageGoalsPerGame: 5.3},
	{season:'20012002', games: 1230, averageGoalsPerGame: 5.24},
	{season:'20002001', games: 1230, averageGoalsPerGame: 5.52},
	{season:'19991900', games: 1148, averageGoalsPerGame: 5.5},
	{season:'19981999', games: 1107, averageGoalsPerGame: 5.26},
	{season:'19971998', games: 1066, averageGoalsPerGame: 5.28},
	{season:'19961997', games: 1066, averageGoalsPerGame: 5.84},
	{season:'19951996', games: 1066, averageGoalsPerGame: 6.28},
	{season:'19941995', games: 624, averageGoalsPerGame: 5.98},
	{season:'19931994', games: 1092, averageGoalsPerGame: 6.48},
	{season:'19921993', games: 1008, averageGoalsPerGame: 7.26},
	{season:'19911992', games: 880, averageGoalsPerGame: 6.96},
	{season:'19901991', games: 840, averageGoalsPerGame: 6.92},
	{season:'19891990', games: 840, averageGoalsPerGame: 7.36},
	{season:'19881989', games: 840, averageGoalsPerGame: 7.48},
	{season:'19871988', games: 840, averageGoalsPerGame: 7.42},
	{season:'19861987', games: 840, averageGoalsPerGame: 7.34},
	{season:'19851986', games: 840, averageGoalsPerGame: 7.94},
	{season:'19841985', games: 840, averageGoalsPerGame: 7.78},
	{season:'19831984', games: 840, averageGoalsPerGame: 7.88},
	{season:'19821983', games: 840, averageGoalsPerGame: 7.72},
	{season:'19811982', games: 840, averageGoalsPerGame: 8.02},
	{season:'19801981', games: 840, averageGoalsPerGame: 7.68},
	{season:'19791980', games: 840, averageGoalsPerGame: 7.02},
	{season:'19781979', games: 680, averageGoalsPerGame: 7},
	{season:'19771978', games: 720, averageGoalsPerGame: 6.6},
	{season:'19761977', games: 720, averageGoalsPerGame: 6.64},
	{season:'19751976', games: 720, averageGoalsPerGame: 6.82},
	{season:'19741975', games: 720, averageGoalsPerGame: 6.86},
	{season:'19731974', games: 624, averageGoalsPerGame: 6.4},
	{season:'19721973', games: 624, averageGoalsPerGame: 6.56},
	{season:'19711972', games: 546, averageGoalsPerGame: 6.14},
	{season:'19701971', games: 546, averageGoalsPerGame: 6.24},
	{season:'19691970', games: 456, averageGoalsPerGame: 5.8},
	{season:'19681969', games: 456, averageGoalsPerGame: 5.96},
	{season:'19671968', games: 444, averageGoalsPerGame: 5.58},
	{season:'19661967', games: 210, averageGoalsPerGame: 5.96},
	{season:'19651966', games: 210, averageGoalsPerGame: 6.08},
	{season:'19641965', games: 210, averageGoalsPerGame: 5.76},
	{season:'19631964', games: 210, averageGoalsPerGame: 5.56},
	{season:'19621963', games: 210, averageGoalsPerGame: 5.94},
	{season:'19611962', games: 210, averageGoalsPerGame: 6.02},
	{season:'19601961', games: 210, averageGoalsPerGame: 6},
	{season:'19591960', games: 210, averageGoalsPerGame: 5.9},
	{season:'19581959', games: 210, averageGoalsPerGame: 5.8},
	{season:'19571958', games: 210, averageGoalsPerGame: 5.6},
	{season:'19561957', games: 210, averageGoalsPerGame: 5.38},
	{season:'19551956', games: 210, averageGoalsPerGame: 5.06},
	{season:'19541955', games: 210, averageGoalsPerGame: 5.04},
	{season:'19531954', games: 210, averageGoalsPerGame: 4.8},
	{season:'19521953', games: 210, averageGoalsPerGame: 4.8},
	{season:'19511952', games: 210, averageGoalsPerGame: 5.2},
	{season:'19501951', games: 210, averageGoalsPerGame: 5.42},
	{season:'19491950', games: 210, averageGoalsPerGame: 5.46},
	{season:'19481949', games: 180, averageGoalsPerGame: 5.44},
	{season:'19471948', games: 180, averageGoalsPerGame: 5.86},
	{season:'19461947', games: 180, averageGoalsPerGame: 6.32},
	{season:'19451946', games: 150, averageGoalsPerGame: 6.68},
	{season:'19441945', games: 150, averageGoalsPerGame: 7.36},
	{season:'19431944', games: 150, averageGoalsPerGame: 8.16},
	{season:'19421943', games: 150, averageGoalsPerGame: 7.22},
	{season:'19411942', games: 168, averageGoalsPerGame: 6.24},
	{season:'19401941', games: 168, averageGoalsPerGame: 5.36},
	{season:'19391940', games: 168, averageGoalsPerGame: 4.98},
	{season:'19381939', games: 168, averageGoalsPerGame: 5.06},
	{season:'19371938', games: 192, averageGoalsPerGame: 5.06},
	{season:'19361937', games: 192, averageGoalsPerGame: 4.92},
	{season:'19351936', games: 192, averageGoalsPerGame: 4.32},
	{season:'19341935', games: 216, averageGoalsPerGame: 5.04},
	{season:'19331934', games: 216, averageGoalsPerGame: 4.82},
	{season:'19321933', games: 216, averageGoalsPerGame: 4.56},
	{season:'19311932', games: 192, averageGoalsPerGame: 4.98},
	{season:'19301931', games: 220, averageGoalsPerGame: 4.8},
	{season:'19291930', games: 220, averageGoalsPerGame: 5.92},
	{season:'19281929', games: 220, averageGoalsPerGame: 2.92},
	{season:'19271928', games: 220, averageGoalsPerGame: 3.8},
	{season:'19261927', games: 220, averageGoalsPerGame: 4},
	{season:'19251926', games: 126, averageGoalsPerGame: 4.62},
	{season:'19241925', games: 90, averageGoalsPerGame: 5},
	{season:'19231924', games: 48, averageGoalsPerGame: 5.32},
	{season:'19221923', games: 48, averageGoalsPerGame: 6.52},
	{season:'19211922', games: 48, averageGoalsPerGame: 7.92},
	{season:'19201921', games: 48, averageGoalsPerGame: 8.46},
	{season:'19191920', games: 48, averageGoalsPerGame: 9.58},
	{season:'19181919', games: 27, averageGoalsPerGame: 8.26},
	{season:'19171918', games: 36, averageGoalsPerGame: 9.5}
];

export function GetGamesInSeason(season : string) : number {

	var year1 = parseInt(season.substring(0,4));
	var year2 = parseInt(season.substring(4,8));

	var foundSeason = GamesPerSeason.find((x) => ( year1 >= parseInt(x.seasons.substring(0,4)) && year2 <= parseInt(x.seasons.substring(4,8)) ));

	if (foundSeason) {
		return foundSeason.games;
	}
	
	return 82;

}

export function GetLeagueAverageForSeason(season: string) : LeagueAverage {
	var foundSeason = LeagueAverages.find((x) => (x.season == season));

	if (foundSeason) {
		return foundSeason;
	}

	return {season: "NA", games: 1271, averageGoalsPerGame: 6.0};
}