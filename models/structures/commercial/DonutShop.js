
function DonutShop(_x, _y) {
	this.type = "donutShop";
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
	this.shape.name = "DonutShop ("+this.x+","+this.y+")";
}

DonutShop.prototype = new CommercialBase();
