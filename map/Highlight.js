
function Highlight(_stage, _container) {
	this.stage = _stage;
	this.container = _container;
	this.shape = new createjs.Shape();
	this.container.addChild(this.shape);
	this.type = "default";
	this.width = 1;
	this.height = 1;
	this.setDefault();
	this.setPosition(0, 0);
	this.disable();
}

Highlight.prototype.setPosition = function(x, y) {
	this.shape.x = x * DesignerConfig.cell.cellWidth;
	this.shape.y = y * DesignerConfig.cell.cellHeight;
	if (x > mapData.totalWidth - this.width || y > mapData.totalHeight - this.height) {
		this.disable();
	} else {
		this.enable();
	}
	this.stage.update();
};

Highlight.prototype.disable = function() {
	if (this.container.contains(this.shape)) {
		this.container.removeChild(this.shape);
		this.stage.update();
	}
};

Highlight.prototype.enable = function() {
	if (!this.container.contains(this.shape)) {
		this.container.addChild(this.shape);
		this.stage.update();
	}
};

Highlight.prototype.setDefault = function() {
	this.type = "default";
	this.width = 1;
	this.height = 1;
	this.shape.graphics.clear();
	this.shape.graphics.beginFill(DesignerConfig.cell.bgHoverColor);
	this.shape.graphics.drawRect(1, 1, DesignerConfig.cell.cellWidth - 2, DesignerConfig.cell.cellHeight - 2);
};

Highlight.prototype.setZone = function(zone) {
	this.type = zone.type;
	this.width = zone.width;
	this.height = zone.height;
	this.shape.graphics.clear();
	this.shape.graphics.beginFill(DesignerConfig.cell.bgHoverColor);
	this.shape.graphics.drawRect(1, 1, (DesignerConfig.cell.cellWidth * zone.width) - 2,
		(DesignerConfig.cell.cellHeight * zone.height) - 2);
};
