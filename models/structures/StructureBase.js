
function StructureBase() {
	
	this.type = null;
	this.bgDefaultColor = null;
	this.x = -1;
	this.y = -1;
	this.orientation = 0;
}

StructureBase.prototype.rotate = function(container, angle) {
	if (angle !== undefined) {
		this.orientation = angle;
	} else {
		this.orientation += 90;
	}
	if (this.orientation > 270) { this.orientation = 0; }
	this.unloadZone(container);
	this.loadZone(container);
};

StructureBase.prototype.getX = function() {
	return this.x;
};

StructureBase.prototype.getY = function() {
	return this.y;
};

StructureBase.prototype.getWidth = function() {
	if (this.orientation === 0 || this.orientation == 180) {
		return this.width;
	}
	return this.height;
};

StructureBase.prototype.getHeight = function() {
	if (this.orientation === 0 || this.orientation == 180) {
		return this.height;
	}
	return this.width;
};

StructureBase.prototype.loadZone = function(container) {
	container.addChild(this.shape);
	this.setupShape();
	var x = this.getX() * DesignerConfig.cell.cellWidth;
	var y = this.getY() * DesignerConfig.cell.cellHeight;
	var t = this.text = new createjs.Text(this.label);
	t.textAlign = "center";
	t.x = x + ((DesignerConfig.cell.cellWidth * this.getWidth()) / 2);
	t.y = (y + ((DesignerConfig.cell.cellHeight * this.getHeight()) / 2)) - (t.getMeasuredLineHeight() / 2);
	container.addChild(t);
};

StructureBase.prototype.unloadZone = function(container) {
	container.removeChild(this.shape);
	container.removeChild(this.text);
};

StructureBase.prototype.setupShape = function() {
	this.shape.graphics.clear();
	this.shape.graphics.setStrokeStyle(1);
	this.shape.graphics.beginFill(this.bgDefaultColor);
	var x = this.getX() * DesignerConfig.cell.cellWidth;
	var y = this.getY() * DesignerConfig.cell.cellHeight;
	this.shape.graphics.drawRect(x, y, DesignerConfig.cell.cellWidth * this.getWidth(), DesignerConfig.cell.cellHeight * this.getHeight());

	this.shape.graphics.beginFill("rgba(0, 0, 0, 0)");
	this.shape.graphics.beginStroke(this.outlineDefaultColor);
	this.shape.graphics.drawRect(x, y, DesignerConfig.cell.cellWidth * this.getWidth(), DesignerConfig.cell.cellHeight * this.getHeight());
};

StructureBase.prototype.getEffectArea = function() {
	if (!this.dirtyWidth && !this.coverageWidth) { return {}; }
	var areaX;
	var areaY;
	var areaWidth;
	var areaHeight;
	if (this.dirtyWidth && this.dirtyWidth > 0) {
		areaWidth = this.dirtyWidth;
		areaHeight = this.dirtyHeight;
	} else {
		areaWidth = this.coverageWidth;
		areaHeight = this.coverageHeight;
	}
	var x = this.getX();
	var y = this.getY();
	var w = this.getWidth();
	var h = this.getHeight();
	if (this.orientation === 0 || this.orientation == 90) {
		areaX = Math.floor(x - (areaWidth - w) / 2);
		areaY = Math.floor(y - (areaHeight - h) / 2);
	} else {
		areaX = Math.ceil(x - (areaWidth - w) / 2);
		areaY = Math.ceil(y - (areaHeight - h) / 2);
	}
	if (areaX < 0) { areaX = 0; }
	if (areaY < 0) { areaY = 0; }
	if ((x + w) + ((areaWidth - w) / 2) > mapData.totalWidth) {
		areaWidth -= ((x + w) + ((areaWidth - w) / 2)) - mapData.totalWidth;
	} else if ((x - (areaWidth - w) / 2) < 0) {
		areaWidth += (x - (areaWidth - w) / 2);
	}
	if ((y + h) + ((areaHeight - h) / 2) > mapData.totalHeight) {
		areaHeight -= ((y + h) + ((areaHeight - h) / 2)) - mapData.totalHeight;
	} else if ((y - (areaHeight - h) / 2) < 0) {
		areaHeight += (y - (areaHeight - h) / 2);
	}
	return { 'x': areaX, 'y': areaY, 'width': areaWidth, 'height': areaHeight };
};
