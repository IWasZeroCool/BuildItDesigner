
function MayorsMansion(_x, _y) {
	this.type = "mayorsMansion";
	var data = eval("buildingData.government."+this.type);
	this.title = data.title;
	this.label = data.label;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.singleton = data.singleton;
	this.bgDefaultColor = buildingData.government.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.government.config.outlineDefaultColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "MayorsMansion ("+this.x+","+this.y+")";
}

MayorsMansion.prototype = new GovernmentBase();
