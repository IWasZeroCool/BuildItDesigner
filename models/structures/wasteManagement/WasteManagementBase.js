

function WasteManagementBase() {
	this.bgDefaultColor = "#000000";
	this.label = "";
	this.shape = null;
	this.text = null;
	this.width = 1;
	this.height = 1;
	this.dirtyWidth = 0;
	this.dirtyHeight = 0;
	this.currency = "gold";
	this.price = 0;
	this.capacity = 0;
}

WasteManagementBase.prototype = new StructureBase();

