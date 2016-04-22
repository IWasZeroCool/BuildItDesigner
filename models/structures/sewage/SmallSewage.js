
function SmallSewage(_x, _y) {
	this.type = "small";
	var data = eval("buildingData.sewage."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.capacity = data.capacity;
	this.dirtyWidth = data.dirtyWidth;
	this.dirtyHeight = data.dirtyHeight;
	this.bgDefaultColor = buildingData.sewage.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.sewage.config.outlineDefaultColor;
	this.bgDefaultDirtyColor = buildingData.sewage.config.bgDefaultDirtyColor;
	this.outlineDefaultDirtyColor = buildingData.sewage.config.outlineDefaultDirtyColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "SmallSewage ("+this.x+","+this.y+")";
}

SmallSewage.prototype = new SewageBase();
