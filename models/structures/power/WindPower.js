
function WindPower(_x, _y) {
	this.type = "wind";
	var data = eval("buildingData.power."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.capacity = data.capacity;
	this.dirtyWidth = data.dirtyWidth;
	this.dirtyHeight = data.dirtyHeight;
	this.bgDefaultColor = buildingData.power.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.power.config.outlineDefaultColor;
	this.bgDefaultDirtyColor = buildingData.power.config.bgDefaultDirtyColor;
	this.outlineDefaultDirtyColor = buildingData.power.config.outlineDefaultDirtyColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "WindPower ("+this.x+","+this.y+")";
}

WindPower.prototype = new PowerBase();
