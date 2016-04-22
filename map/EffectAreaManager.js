
function EffectAreaManager(_structures, _effectAreaContainer, _stage) {
	this.structures = _structures;
	this.effectAreaContainer = _effectAreaContainer;
	this.dirtyStructures = [];
	this.policeStructures = [];
	this.fireStructures = [];
	this.healthStructures = [];
	this.parkStructures = [];
	this.educationStructures = [];

	this.dirtyShapes = [];
	this.fireShapes = [];
	this.policeShapes = [];
	this.healthShapes = [];
	this.parkShapes = [];
	this.educationShapes = [];

	this.stage = _stage;
	this.outlineShape = new createjs.Shape();
	this.effectAreaContainer.addChild(this.outlineShape);
}

EffectAreaManager.prototype.initStructures = function() {
	this.rebuildDirtyStructuresList();
	this.rebuildFireStructuresList();
	this.rebuildPoliceStructuresList();
	this.rebuildHealthStructuresList();
	this.rebuildParkStructuresList();
	this.rebuildEducationStructuresList();
};

EffectAreaManager.prototype.structureModified = function(structure) {
	if (!structure) {
		this.rebuildDirtyStructuresList();
		this.rebuildFireStructuresList();
		this.rebuildPoliceStructuresList();
		this.rebuildHealthStructuresList();
		this.rebuildParkStructuresList();
		this.rebuildEducationStructuresList();
	} else if (structure.dirtyWidth) {
		this.rebuildDirtyStructuresList();
	} else if (structure instanceof FireBase) {
		this.rebuildFireStructuresList();
	} else if (structure instanceof PoliceBase) {
		this.rebuildPoliceStructuresList();
	} else if (structure instanceof HealthBase) {
		this.rebuildHealthStructuresList();
	} else if (structure instanceof ParkBase) {
		this.rebuildParkStructuresList();
	} else if (structure instanceof EducationBase) {
		this.rebuildEducationStructuresList();
	}
};

EffectAreaManager.prototype.rebuildDirtyStructuresList = function() {
	this.dirtyStructures = [];
	for (var i = 0; i < this.structures.length; i++) {
		if (this.structures[i].dirtyWidth) {
			this.dirtyStructures.push(this.structures[i]);
		}
	}
	this.rebuildEffectArea(this.dirtyStructures, this.dirtyShapes, buildingData.industrial.config.bgDefaultDirtyColor, "dirty");
};

EffectAreaManager.prototype.rebuildFireStructuresList = function() {
	this.fireStructures = [];
	for (var i = 0; i < this.structures.length; i++) {
		if (this.structures[i] instanceof FireBase) {
			this.fireStructures.push(this.structures[i]);
		}
	}
	this.rebuildEffectArea(this.fireStructures, this.fireShapes, buildingData.fire.config.bgDefaultCoverageColor, "fire");
};

EffectAreaManager.prototype.rebuildPoliceStructuresList = function() {
	this.policeStructures = [];
	for (var i = 0; i < this.structures.length; i++) {
		if (this.structures[i] instanceof PoliceBase) {
			this.policeStructures.push(this.structures[i]);
		}
	}
	this.rebuildEffectArea(this.policeStructures, this.policeShapes, buildingData.police.config.bgDefaultCoverageColor, "police");
};

EffectAreaManager.prototype.rebuildHealthStructuresList = function() {
	this.healthStructures = [];
	for (var i = 0; i < this.structures.length; i++) {
		if (this.structures[i] instanceof HealthBase) {
			this.healthStructures.push(this.structures[i]);
		}
	}
	this.rebuildEffectArea(this.healthStructures, this.healthShapes, buildingData.health.config.bgDefaultCoverageColor, "health");
};

EffectAreaManager.prototype.rebuildParkStructuresList = function() {
	this.parkStructures = [];
	for (var i = 0; i < this.structures.length; i++) {
		if (this.structures[i] instanceof ParkBase) {
			this.parkStructures.push(this.structures[i]);
		}
	}
	this.rebuildEffectArea(this.parkStructures, this.parkShapes, buildingData.parks.config.bgDefaultCoverageColor, "parks");
};

EffectAreaManager.prototype.rebuildEducationStructuresList = function() {
	this.educationStructures = [];
	for (var i = 0; i < this.structures.length; i++) {
		if (this.structures[i] instanceof EducationBase) {
			this.educationStructures.push(this.structures[i]);
		}
	}
	this.rebuildEffectArea(this.educationStructures, this.educationShapes, buildingData.education.config.bgDefaultCoverageColor, "education");
};

EffectAreaManager.prototype.cleanShapes = function(shapes) {
	for (var i = 0; i < shapes.length; i++) {
		this.effectAreaContainer.removeChild(shapes[i]);
	}
	shapes = [];
};

EffectAreaManager.prototype.rebuildEffectArea = function(structures, shapes, bgColor, drawType) {
	this.cleanShapes(shapes);
	if (!structures || structures.length <= 0) { return; }
	var cells = new Array(mapData.totalWidth);
	for (var i = 0; i < mapData.totalWidth; i++) {
		cells[i] = new Array(mapData.totalHeight);
	}
	for (i = 0; i < structures.length; i++) {
		var area = structures[i].getEffectArea();
		for (var w = 0; w < area.width; w++) {
			for (var h = 0; h < area.height; h++) {
				var x = area.x + w;
				var y = area.y + h;
				if (cells[x][y] === null || cells[x][y] === undefined) {
					cells[x][y] = true;
				}
			}
		}
	}
	this.drawAreas(shapes, cells, bgColor, drawType);
	this.stage.update();
};

EffectAreaManager.prototype.drawAreas = function(shapes, cells, bgColor, drawType) {
	if ((drawType == "dirty" && !UIState.drawDirty) ||
		(drawType == "fire" && !UIState.drawFireCoverage) ||
		(drawType == "police" && !UIState.drawPoliceCoverage) ||
		(drawType == "health" && !UIState.drawHealthCoverage) ||
		(drawType == "parks" && !UIState.drawParkCoverage) ||
		(drawType == "education" && !UIState.drawEducationCoverage)) { return; }
	var shapeObj;
	while((shapeObj = this.findShape(cells)) !== null) {
		var shape = new createjs.Shape();
		this.effectAreaContainer.addChild(shape);
		shape.graphics.clear();
		shape.graphics.beginFill(bgColor);
		var x = shapeObj.x * DesignerConfig.cell.cellWidth;
		var y = shapeObj.y * DesignerConfig.cell.cellHeight;
		var w = DesignerConfig.cell.cellWidth * shapeObj.width;
		var h = DesignerConfig.cell.cellHeight * shapeObj.height;
		shapes.push(shape);
		shape.graphics.drawRect(x, y, w, h);
		for (x = 0; x < shapeObj.width; x++) {
			for (y = 0; y < shapeObj.height; y++) {
				cells[shapeObj.x + x][shapeObj.y + y] = null;
			}
		}
	}
};

EffectAreaManager.prototype.findShape = function(cells) {
	var origin = null;
	var x;
	var y;
	for (x = 0; x < mapData.totalWidth; x++) {
		for (y = 0; y < mapData.totalHeight; y++) {
			if (cells[x][y] === true) {
				origin = { 'x': x, 'y': y };
				break;
			}
		}
		if (origin !== null) { break; }
	}
	if (origin !== null) {
		var maxContigiousX = origin.x;
		var maxContigiousY = origin.y;
		for (x = origin.x; x < mapData.totalWidth; x++) {
			if (cells[x][origin.y] !== true) { break; }
			maxContigiousX = x + 1;
		}
		for (y = origin.y; y < mapData.totalHeight; y++) {
			if (cells[origin.x][y] !== true) { break; }
			maxContigiousY = y + 1;
		}
		for (y = origin.y; y < maxContigiousY; y++) {
			for (x = origin.x; x < maxContigiousX; x++) {
				if (cells[x][y] !== true) {
					maxContigiousX = x;
					break;
				}
			}
		}
		for (x = origin.x; x < maxContigiousX; x++) {
			for (y = origin.y; y < maxContigiousY; y++) {
				if (cells[x][y] !== true) {
					maxContigiousY = y;
					break;
				}
			}
		}
		return { 'x': origin.x, 'y': origin.y, 'width': maxContigiousX - origin.x, 'height': maxContigiousY - origin.y };
	}
	return null;
};

EffectAreaManager.prototype.drawDirtyAreas = function() {
	this.rebuildEffectArea(this.dirtyStructures, this.dirtyShapes, buildingData.industrial.config.bgDefaultDirtyColor, "dirty");
	this.stage.update();
};

EffectAreaManager.prototype.hideDirtyAreas = function() {
	this.cleanShapes(this.dirtyShapes);
	this.stage.update();
};

EffectAreaManager.prototype.drawFireCoverage = function() {
	this.rebuildEffectArea(this.fireStructures, this.fireShapes, buildingData.fire.config.bgDefaultCoverageColor, "fire");
	this.stage.update();
};

EffectAreaManager.prototype.hideFireCoverage = function() {
	this.cleanShapes(this.fireShapes);
	this.stage.update();
};

EffectAreaManager.prototype.drawPoliceCoverage = function() {
	this.rebuildEffectArea(this.policeStructures, this.policeShapes, buildingData.police.config.bgDefaultCoverageColor, "police");
	this.stage.update();
};

EffectAreaManager.prototype.hidePoliceCoverage = function() {
	this.cleanShapes(this.policeShapes);
	this.stage.update();
};

EffectAreaManager.prototype.drawHealthCoverage = function() {
	this.rebuildEffectArea(this.healthStructures, this.healthShapes, buildingData.health.config.bgDefaultCoverageColor, "health");
	this.stage.update();
};

EffectAreaManager.prototype.hideHealthCoverage = function() {
	this.cleanShapes(this.healthShapes);
	this.stage.update();
};

EffectAreaManager.prototype.drawParkCoverage = function() {
	this.rebuildEffectArea(this.parkStructures, this.parkShapes, buildingData.parks.config.bgDefaultCoverageColor, "parks");
	this.stage.update();
};

EffectAreaManager.prototype.hideParkCoverage = function() {
	this.cleanShapes(this.parkShapes);
	this.stage.update();
};

EffectAreaManager.prototype.drawEducationCoverage = function() {
	this.rebuildEffectArea(this.educationStructures, this.educationShapes, buildingData.education.config.bgDefaultCoverageColor, "education");
	this.stage.update();
};

EffectAreaManager.prototype.hideEducationCoverage = function() {
	this.cleanShapes(this.educationShapes);
	this.stage.update();
};

EffectAreaManager.prototype.checkMouseOver = function(structureIndex) {
	this.outlineShape.graphics.clear();
	if (structureIndex > -1) {
		var drawOutline = false;
		var bgColor;
		if (this.structures[structureIndex].dirtyWidth && UIState.drawDirty) {
			drawOutline = true;
			bgColor = buildingData.industrial.config.outlineDefaultDirtyColor;
		} else if (this.structures[structureIndex] instanceof FireBase && UIState.drawFireCoverage) {
			drawOutline = true;
			bgColor = buildingData.fire.config.outlineDefaultCoverageColor;
		} else if (this.structures[structureIndex] instanceof PoliceBase && UIState.drawPoliceCoverage) {
			drawOutline = true;
			bgColor = buildingData.police.config.outlineDefaultCoverageColor;
		} else if (this.structures[structureIndex] instanceof HealthBase && UIState.drawHealthCoverage) {
			drawOutline = true;
			bgColor = buildingData.health.config.outlineDefaultCoverageColor;
		} else if (this.structures[structureIndex] instanceof ParkBase && UIState.drawParkCoverage) {
			drawOutline = true;
			bgColor = buildingData.parks.config.outlineDefaultCoverageColor;
		} else if (this.structures[structureIndex] instanceof EducationBase && UIState.drawEducationCoverage) {
			drawOutline = true;
			bgColor = buildingData.education.config.outlineDefaultCoverageColor;
		}
		if (drawOutline) {
			this.outlineShape.graphics.setStrokeStyle(1);
			this.outlineShape.graphics.beginStroke(bgColor);
			var rect = this.structures[structureIndex].getEffectArea();
			var x = rect.x * DesignerConfig.cell.cellWidth;
			var y = rect.y * DesignerConfig.cell.cellHeight;
			var w = DesignerConfig.cell.cellWidth * rect.width;
			var h = DesignerConfig.cell.cellHeight * rect.height;
			this.outlineShape.graphics.drawRect(x, y, w, h);
		}
	}
	this.stage.update();
};
