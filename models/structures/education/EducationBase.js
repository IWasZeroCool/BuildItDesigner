
function EducationBase() {
	this.bgDefaultColor = "#000000";
	this.label = "";
	this.shape = null;
	this.text = null;
	this.width = 1;
	this.height = 1;
	this.coverageWidth = 0;
	this.coverageHeight = 0;
	this.currency = "gold";
	this.price = 0;
	this.populationBoost = 0;
}

EducationBase.prototype = new StructureBase();

