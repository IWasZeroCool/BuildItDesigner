
function DeluxeFireStation(_x, _y) {
	this.type = "deluxe";
	var data = eval("buildingData.fire."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.coverageWidth = data.coverageWidth;
	this.coverageHeight = data.coverageHeight;
	this.bgDefaultColor = buildingData.fire.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.fire.config.outlineDefaultColor;
	this.bgDefaultCoverageColor = buildingData.fire.config.bgDefaultCoverageColor;
	this.outlineDefaultCoverageColor = buildingData.fire.config.outlineDefaultCoverageColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "DeluxeFireStation ("+this.x+","+this.y+")";
}

DeluxeFireStation.prototype = new FireBase();
