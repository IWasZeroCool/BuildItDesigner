

function WaterBase() {
	this.bgDefaultColor = "#000000";
	this.label = "";
	this.shape = null;
	this.text = null;
	this.width = 1;
	this.height = 1;
	this.currency = "gold";
	this.price = 0;
	this.capacity = 0;
}

WaterBase.prototype = new StructureBase();

WaterBase.prototype.loadZone = function(container) {
	var _this = this;
	container.addChild(this.shape);
	this.setupShape();

	var x = this.x * DesignerConfig.cell.cellWidth;
	var y = this.y * DesignerConfig.cell.cellHeight;
	var t = this.text = new createjs.Text(this.label);
	t.textAlign = "center";
	t.x = x + ((DesignerConfig.cell.cellWidth * this.width) / 2);
	t.y = (y + ((DesignerConfig.cell.cellHeight * this.height) / 2)) - (t.getMeasuredLineHeight() / 2);
	container.addChild(t);
};

WaterBase.prototype.unloadZone = function(container) {
	container.removeChild(this.shape);
	container.removeChild(this.text);
};

WaterBase.prototype.setupShape = function() {
	this.shape.graphics.clear();
	this.shape.graphics.setStrokeStyle(1);
	this.shape.graphics.beginFill(this.bgDefaultColor);
	var x = this.x * DesignerConfig.cell.cellWidth;
	var y = this.y * DesignerConfig.cell.cellHeight;
	this.shape.graphics.drawRect(x, y, DesignerConfig.cell.cellWidth * this.width, DesignerConfig.cell.cellHeight * this.height);

	this.shape.graphics.beginFill("rgba(0, 0, 0, 0)");
	this.shape.graphics.beginStroke(this.outlineDefaultColor);
	this.shape.graphics.drawRect(x, y, DesignerConfig.cell.cellWidth * this.width, DesignerConfig.cell.cellHeight * this.height);

};
