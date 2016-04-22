
var DesignerConfig = {

	map : {
		mapHeight	: 0,
		mapWidth	: 0,
		mapPadding	: 10,
	},
	cell : {
		cellWidth			: 14,
		cellHeight			: 14,
		bgDefaultColor		: 'rgba(0, 0, 0, 1)',
		bgHoverColor		: 'rgba(255, 255, 255, 0.38)',
		borderDefaultColor	: 'rgba(255, 255, 255, 0.38)',
		borderHoverColor	: 'rgba(255, 255, 255, 1)'
	},
	expansionCell : {
		bgDefaultColor			: 'rgba(0, 0, 0, 0)',
		borderDefaultColor		: 'rgba(255, 255, 255, 1)',
		descriptionTextColor	: 'rgba(255, 255, 255, 1)'
	},

	updateMapDimensions	: function() {
		var canvas = $('#canvas')[0];
		this.map.mapHeight = canvas.height;
		this.map.mapWidth = canvas.width;
	},

	toolTip : {
		borderColor			: 'rgba(250, 255, 220, 1)',
		backgroundColor		: 'rgba(255, 255, 255, 1)',
		titleFont			: "bold 0.7em Arial",
		titleFontColor		: 'rgba(0, 0, 0, 1)',
		defaultFont			: "0.7em Arial",
		defaultFontColor	: 'rgba(0, 0, 0, 1)',
	}

};

