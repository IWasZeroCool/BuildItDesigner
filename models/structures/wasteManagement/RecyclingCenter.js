
function RecyclingCenter(_x, _y) {
	this.type = "recyclingCenter";
	var data = eval("buildingData.wasteManagement."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.capacity = data.capacity;
	this.dirtyWidth = data.dirtyWidth;
	this.dirtyHeight = data.dirtyHeight;
	this.bgDefaultColor = buildingData.wasteManagement.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.wasteManagement.config.outlineDefaultColor;
	this.bgDefaultDirtyColor = buildingData.wasteManagement.config.bgDefaultDirtyColor;
	this.outlineDefaultDirtyColor = buildingData.wasteManagement.config.outlineDefaultDirtyColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "RecyclingCenter ("+this.x+","+this.y+")";
}

RecyclingCenter.prototype = new WasteManagementBase();
