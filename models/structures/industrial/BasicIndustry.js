
function BasicIndustry(_x, _y) {
	this.type = "basic";
	var data = eval("buildingData.industrial."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.dirtyWidth = data.dirtyWidth;
	this.dirtyHeight = data.dirtyHeight;
	this.production = data.production;
	this.bgDefaultColor = buildingData.industrial.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.industrial.config.outlineDefaultColor;
	this.bgDefaultDirtyColor = buildingData.industrial.config.bgDefaultDirtyColor;
	this.outlineDefaultDirtyColor = buildingData.industrial.config.outlineDefaultDirtyColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "BasicIndustry ("+this.x+","+this.y+")";
}

BasicIndustry.prototype = new IndustrialBase();
