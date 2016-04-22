
function PolicePrecinct(_x, _y) {
	this.type = "precinct";
	var data = eval("buildingData.police."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.coverageWidth = data.coverageWidth;
	this.coverageHeight = data.coverageHeight;
	this.bgDefaultColor = buildingData.police.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.police.config.outlineDefaultColor;
	this.bgDefaultCoverageColor = buildingData.police.config.bgDefaultCoverageColor;
	this.outlineDefaultCoverageColor = buildingData.police.config.outlineDefaultCoverageColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "PolicePrecinct ("+this.x+","+this.y+")";
}

PolicePrecinct.prototype = new PoliceBase();
