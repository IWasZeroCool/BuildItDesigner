
function StructureManager(_structures, _structuresContainer) {
	this.structures = _structures;
	this.structuresContainer = _structuresContainer;
}

StructureManager.prototype.rotateStructure = function(structureIndex, stage, angle) {
	if (structureIndex < 0) { return; }
	this.structures[structureIndex].rotate(this.structuresContainer, angle);
	stage.update();
};

StructureManager.prototype.updateStructure = function(x, y, stage, orientation) {
	var i = this.getStructure(x, y);
	if (UIState.whichButton.id == "clearBuildingButton") {
		return this.checkClearStructure(x, y, stage);
	} else if (UIState.whichButton.id == "rotateBuildingButton") {
		return this.checkClearStructure(x, y, stage, this.structures[i].getWidth(), this.structures[i].getHeight(), i);
	} else {
		return this.checkUpdateStructure(x, y, buttonToClass[UIState.whichButton.id], stage, orientation);
	}
	return null;
};

StructureManager.prototype.checkUpdateStructure = function(x, y, structureClass, stage, orientation) {
	var structure = new structureClass(x, y);
	this.checkClearStructure(x, y, stage, structure.getWidth(), structure.getHeight());
	for (var i = 0; i < this.structures.length; i++) {
		if (this.structures[i] instanceof structureClass && this.structures[i].singleton) {
			this.structures[i].unloadZone(this.structuresContainer);
			this.structures.splice(i, 1);
			break;
		}
	}
	this.structures.push(structure);
	if (orientation !== undefined) {
		structure.rotate(this.structuresContainer, orientation);
	} else {
		structure.loadZone(this.structuresContainer);
	}
	stage.update();
	return structure;
};

StructureManager.prototype.checkClearStructure = function(x, y, stage, width, height, keepStructureIndex) {
	if (!width) { width = 1; }
	if (!height) { height = 1; }
	var i;
	while((i = this.getStructure(x, y, width, height, keepStructureIndex)) > -1) {
		this.structures[i].unloadZone(this.structuresContainer);
		this.structures.splice(i, 1);
		stage.update();
	}
};

StructureManager.prototype.getStructure = function(x, y, width, height, skipStructureIndex) {
	if (!width) { width = 1; }
	if (!height) { height = 1; }
	for (var i = 0; i < this.structures.length; i++) {
		if (x < this.structures[i].x + this.structures[i].width &&
			x + width > this.structures[i].x &&
			y < this.structures[i].y + this.structures[i].height &&
			y + height > this.structures[i].y) {
			if (skipStructureIndex !== undefined && i == skipStructureIndex) { continue; }
			return i;
		}
	}
	return -1;
};
