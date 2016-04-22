
function CommunityCollege(_x, _y) {
	this.type = "communityCollege";
	var data = eval("buildingData.education."+this.type);
	this.label = data.label;
	this.title = data.title;
	this.width = data.width;
	this.height = data.height;
	this.price = data.price;
	this.currency = data.currency;
	this.coverageWidth = data.coverageWidth;
	this.coverageHeight = data.coverageHeight;
	this.populationBoost = data.populationBoost;
	this.singleton = data.singleton;
	this.bgDefaultColor = buildingData.education.config.bgDefaultColor;
	this.outlineDefaultColor = buildingData.education.config.outlineDefaultColor;
	this.bgDefaultCoverageColor = buildingData.education.config.bgDefaultCoverageColor;
	this.outlineDefaultCoverageColor = buildingData.education.config.outlineDefaultCoverageColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "CommunityCollege ("+this.x+","+this.y+")";
}

CommunityCollege.prototype = new EducationBase();
