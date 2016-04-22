
function FurnitureStore(_x, _y) {
	this.type = "furnitureStore";
	var data = eval("buildingData.commercial."+this.type);
	this.title = data.title;
	this.label = data.label;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.singleton = data.singleton;
	this.bgDefaultColor = buildingData.commercial.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.commercial.config.outlineDefaultColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "FurnitureStore ("+this.x+","+this.y+")";
}

FurnitureStore.prototype = new CommercialBase();