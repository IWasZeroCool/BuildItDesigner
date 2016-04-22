
function WaterPumpingStation(_x, _y) {
	this.type = "waterPumpingStation";
	var data = eval("buildingData.water."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.capacity = data.capacity;
	this.bgDefaultColor = buildingData.water.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.water.config.outlineDefaultColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "WaterPumpingStation ("+this.x+","+this.y+")";
}

WaterPumpingStation.prototype = new WaterBase();
