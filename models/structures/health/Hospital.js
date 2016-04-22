
function Hospital(_x, _y) {
	this.type = "hospital";
	var data = eval("buildingData.health."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.coverageWidth = data.coverageWidth;
	this.coverageHeight = data.coverageHeight;
	this.bgDefaultColor = buildingData.health.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.health.config.outlineDefaultColor;
	this.bgDefaultCoverageColor = buildingData.health.config.bgDefaultCoverageColor;
	this.outlineDefaultCoverageColor = buildingData.health.config.outlineDefaultCoverageColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "Hospital ("+this.x+","+this.y+")";
}

Hospital.prototype = new HealthBase();
