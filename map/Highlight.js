
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
	this.orientation = 0;
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
	this.orientation = 0;
	this.shape.graphics.clear();
	this.shape.graphics.beginFill(DesignerConfig.cell.bgHoverColor);
	this.shape.graphics.drawRect(1, 1, DesignerConfig.cell.cellWidth - 2, DesignerConfig.cell.cellHeight - 2);
};

Highlight.prototype.setZone = function(zone) {
	zone.orientation = this.orientation;
	this.type = zone.type;
	this.width = zone.getWidth();
	this.height = zone.getHeight();
	this.orientation = 0;
	this.shape.graphics.clear();
	this.shape.graphics.beginFill(DesignerConfig.cell.bgHoverColor);
	this.shape.graphics.drawRect(1, 1, (DesignerConfig.cell.cellWidth * this.width) - 2,
		(DesignerConfig.cell.cellHeight * this.height) - 2);
};

Highlight.prototype.rotate = function() {
	this.orientation += 90;
	if (this.orientation > 270) { this.orientation = 0; }
	this.shape.graphics.clear();
	this.shape.graphics.beginFill(DesignerConfig.cell.bgHoverColor);
	if (this.type == "default") {
		this.shape.graphics.drawRect(1, 1, DesignerConfig.cell.cellWidth - 2, DesignerConfig.cell.cellHeight - 2);
	} else {
		this.shape.graphics.drawRect(1, 1, (DesignerConfig.cell.cellWidth * this.getWidth()) - 2,
			(DesignerConfig.cell.cellHeight * this.getHeight()) - 2);
	}
};

Highlight.prototype.getWidth = function() {
	if (this.orientation === 0 || this.orientation == 180) {
		return this.width;
	}
	return this.height;
};

Highlight.prototype.getHeight = function() {
	if (this.orientation === 0 || this.orientation == 180) {
		return this.height;
	}
	return this.width;
};

