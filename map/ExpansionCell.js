
function ExpansionCell(_x, _y, _width, _height, _cost) {
	
	this.x = _x;
	this.y = _y;
	this.width = _width;
	this.height = _height;
	this.cost = _cost;

}

ExpansionCell.prototype.loadExpansionCell = function(container) {
	var c = new createjs.Shape();
	c.name = "expansionCell ("+this.x+","+this.y+")";
	c.graphics.setStrokeStyle(1);
	c.graphics.setStrokeDash([10, 8], 3);
	c.graphics.beginStroke(DesignerConfig.expansionCell.borderDefaultColor);
	c.graphics.beginFill(DesignerConfig.expansionCell.bgDefaultColor);
	var x = this.x * DesignerConfig.cell.cellWidth;
	var y = this.y * DesignerConfig.cell.cellHeight;
	c.graphics.drawRect(x,
		y,
		this.width * DesignerConfig.cell.cellWidth,
		this.height * DesignerConfig.cell.cellHeight);
	container.addChild(c);
	var t = new createjs.Text("Expansion Cost: "+this.cost, "8pt Arial", DesignerConfig.expansionCell.descriptionTextColor);
	t.lineWidth = (this.width * DesignerConfig.cell.cellWidth) - (DesignerConfig.cell.cellWidth * 2);
	t.textAlign = "center";
	t.x = x + ((this.width * DesignerConfig.cell.cellWidth) / 2);
	t.y = y + ((this.height * DesignerConfig.cell.cellHeight) / 2);
	container.addChild(t);
};
