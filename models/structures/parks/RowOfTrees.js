
function RowOfTrees(_x, _y) {
	this.type = "rowOfTrees";
	var data = eval("buildingData.parks."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.coverageWidth = data.coverageWidth;
	this.coverageHeight = data.coverageHeight;
	this.populationBoost = data.populationBoost;
	this.bgDefaultColor = buildingData.parks.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.parks.config.outlineDefaultColor;
	this.bgDefaultCoverageColor = buildingData.parks.config.bgDefaultCoverageColor;
	this.outlineDefaultCoverageColor = buildingData.parks.config.outlineDefaultCoverageColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "RowOfTrees ("+this.x+","+this.y+")";
}

RowOfTrees.prototype = new ParkBase();
