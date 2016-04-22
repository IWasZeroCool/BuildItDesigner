
function RoadBase() {
	this.bgDefaultColor = "#000000";
	this.label = "label";
	this.shape = null;
	this.text = null;
	this.width = 1;
	this.height = 1;
}

RoadBase.prototype = new StructureBase();

RoadBase.prototype.loadRoad = function(container) {
	var _this = this;
	container.addChild(this.shape);
	this.shape.graphics.setStrokeStyle(1);
	this.shape.graphics.beginFill(this.bgDefaultColor);
	var x = this.x * DesignerConfig.cell.cellWidth;
	var y = this.y * DesignerConfig.cell.cellHeight;
	this.shape.graphics.drawRect(x, y, DesignerConfig.cell.cellWidth * this.width, DesignerConfig.cell.cellHeight * this.height);

	var t = this.text = new createjs.Text(this.label);
	t.textAlign = "center";
	t.x = x + (DesignerConfig.cell.cellWidth / 2);
	t.y = (y + (DesignerConfig.cell.cellHeight / 2)) - (t.getMeasuredLineHeight() / 2);
	container.addChild(t);

};

RoadBase.prototype.unloadRoad = function(container) {
	container.removeChild(this.shape);
	container.removeChild(this.text);
};
