
function ParisianZone(_x, _y) {
	this.type = "parisianZone";
	var data = eval("buildingData.residential."+this.type);
	this.title = data.title;
	this.label = data.label;
	this.width = data.width;
	this.height = data.height;
	this.maxPopulation = data.maxPopulation;
	this.bgDefaultColor = buildingData.residential.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.residential.config.outlineDefaultColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "ParisianZone ("+this.x+","+this.y+")";
}

ParisianZone.prototype = new ResidentialBase();
