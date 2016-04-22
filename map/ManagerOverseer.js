
function ManagerOverseer(_stage, _roadManager, _structureManager, _effectAreaManager, _statisticsManager, _highlight) {
	this.stage = _stage;
	this.roadManager = _roadManager;
	this.structureManager = _structureManager;
	this.effectAreaManager = _effectAreaManager;
	this.statisticsManager = _statisticsManager;
	this.highlight = _highlight;
	this.statisticsManager.init();
}

ManagerOverseer.prototype.mouseMove = function(x, y) {
	var structureIndex = null;
	if (UIState.buttonOn && (UIState.whichButton !== null)) {
		if (UIState.whichButton.id.substring(UIState.whichButton.id.length - 10) == "RoadButton" && UIState.mouseIsDown) {
			// If there is no structure THEN add a road
			if ((structureIndex = this.structureManager.getStructure(x, y)) < 0) {
				this.roadManager.updateRoad(x, y, this.stage);
			}
		}
	}
	if (structureIndex === null) {
		structureIndex = this.structureManager.getStructure(x, y);
	}
	this.effectAreaManager.checkMouseOver(structureIndex);
};

ManagerOverseer.prototype.mouseClick = function(x, y) {
	if (UIState.buttonOn && (UIState.whichButton !== null)) {
		var structure;
		if (UIState.whichButton.id.substring(UIState.whichButton.id.length - 10) == "RoadButton") {
			// If there is no structure THEN add a road
			if (this.structureManager.getStructure(x, y) < 0) {
				this.roadManager.updateRoad(x, y, this.stage);
			}
		} else if (UIState.whichButton.id == "rotateBuildingButton") {
			var structureIndex = this.structureManager.getStructure(x, y);
			if (structureIndex > -1) {
				this.structureManager.rotateStructure(structureIndex, this.stage);
				structure = this.structureManager.updateStructure(x, y, this.stage, this.structureManager.structures[structureIndex]);
				this.effectAreaManager.structureModified();
				this.effectAreaManager.checkMouseOver(this.structureManager.getStructure(x, y));
			}
		} else if (UIState.whichButton.id == "clearBuildingButton") {
			structure = this.structureManager.updateStructure(x, y, this.stage);
			this.effectAreaManager.structureModified();
			this.effectAreaManager.checkMouseOver(this.structureManager.getStructure(x, y));
		} else {
			structure = this.structureManager.updateStructure(x, y, this.stage, this.highlight.orientation);
			this.effectAreaManager.structureModified();
			for (var sx = structure.x; sx < structure.x + structure.width; sx++) {
				for (var sy = structure.y; sy < structure.y + structure.height; sy++) {
					this.roadManager.checkClearRoad(sx, sy, this.stage);
				}
			}
			this.effectAreaManager.checkMouseOver(this.structureManager.getStructure(x, y));
		}
		this.statisticsManager.recalculateSums();
	}
};
