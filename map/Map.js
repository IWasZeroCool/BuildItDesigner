
function Map(_stage) {

	this.baseToMapData = [
		{
			baseClass: CommercialBase,
			mapPath : buildingData.commercial
		},
		{
			baseClass: EducationBase,
			mapPath : buildingData.education
		},
		{
			baseClass: FireBase,
			mapPath : buildingData.fire
		},
		{
			baseClass: GovernmentBase,
			mapPath : buildingData.government
		},
		{
			baseClass: HealthBase,
			mapPath : buildingData.health
		},
		{
			baseClass: IndustrialBase,
			mapPath : buildingData.industrial
		},
		{
			baseClass: ParkBase,
			mapPath : buildingData.parks
		},
		{
			baseClass: PoliceBase,
			mapPath : buildingData.police
		},
		{
			baseClass: PowerBase,
			mapPath : buildingData.power
		},
		{
			baseClass: ResidentialBase,
			mapPath : buildingData.residential
		},
		{
			baseClass: SewageBase,
			mapPath : buildingData.sewage
		},
		{
			baseClass: WasteManagementBase,
			mapPath : buildingData.wasteManagement
		},
		{
			baseClass: WaterBase,
			mapPath : buildingData.water
		},
	];

	this.stage = _stage;
	this.totalWidth = -1;
	this.totalHeight = -1;
	this.expansionCells = [];
	this.structures = {
		roads: [],
		buildings: []
	};

	this.cellsContainer = new createjs.Container();
	this.cellsContainer.name = "cellsContainer";
	this.expansionCellsContainer = new createjs.Container();
	this.expansionCellsContainer.name = "expansionCellsContainer";
	this.roadsContainer = new createjs.Container();
	this.roadsContainer.name = "roadsContainer";
	this.structuresContainer = new createjs.Container();
	this.structuresContainer.name = "structuresContainer";
	this.areaEffectsContainer = new createjs.Container();
	this.areaEffectsContainer.name = "areaEffectsContainer";
	this.highlightContainer = new createjs.Container();
	this.highlightContainer.name = "highlightContainer";

	var _this = this;
	this.stage.on("stagemousemove",function(e) {
		_this.mouseMove(e);
	});
	this.stage.on("stagemouseup",function(e) {
		_this.mouseClick(e);
	});

	this.roadManager = new RoadManager(this.structures.roads, this.roadsContainer);
	this.structureManager = new StructureManager(this.structures.buildings, this.structuresContainer);
	this.effectAreaManager = new EffectAreaManager(this.structures.buildings, this.areaEffectsContainer, this.stage);
	this.statisticsManager = new StatisticsManager(this.structures);
	this.highlight = new Highlight(this.stage, this.highlightContainer);
	this.managerOverseer = new ManagerOverseer(this.stage,
												this.roadManager,
												this.structureManager,
												this.effectAreaManager,
												this.statisticsManager,
												this.highlight);
	this.toolTip = new ToolTip();

}

Map.prototype.loadMapData = function(mapData) {
	this.totalWidth = mapData.totalWidth;
	this.totalHeight = mapData.totalHeight;
	var _this = this;
	for (var i = 0; i < mapData.cells.length; i++) {
		var ecell = new ExpansionCell(mapData.cells[i].x,
			mapData.cells[i].y,
			mapData.cells[i].width,
			mapData.cells[i].height,
			mapData.cells[i].cost);
		this.expansionCells[i] = ecell;
	}
};

Map.prototype.loadMapObjects = function(stage) {

	this.cellsContainer.x = DesignerConfig.map.mapPadding;
	this.cellsContainer.y = DesignerConfig.map.mapPadding;
	this.expansionCellsContainer.x = DesignerConfig.map.mapPadding;
	this.expansionCellsContainer.y = DesignerConfig.map.mapPadding;
	this.roadsContainer.x = DesignerConfig.map.mapPadding;
	this.roadsContainer.y = DesignerConfig.map.mapPadding;
	this.structuresContainer.x = DesignerConfig.map.mapPadding;
	this.structuresContainer.y = DesignerConfig.map.mapPadding;
	this.areaEffectsContainer.x = DesignerConfig.map.mapPadding;
	this.areaEffectsContainer.y = DesignerConfig.map.mapPadding;
	this.highlightContainer.x = DesignerConfig.map.mapPadding;
	this.highlightContainer.y = DesignerConfig.map.mapPadding;


	stage.addChild(this.cellsContainer);
	stage.addChild(this.roadsContainer);
	stage.addChild(this.structuresContainer);
	stage.addChild(this.areaEffectsContainer);
	stage.addChild(this.highlightContainer);
	stage.addChild(this.toolTipContainer);

	var grid = new createjs.Shape();
	grid.graphics.setStrokeStyle(1);
	grid.graphics.beginStroke(DesignerConfig.cell.borderDefaultColor);
	if (this.totalWidth) {
		for (var x = 0; x < this.totalWidth + 1; x++) {
			var xPix = x * DesignerConfig.cell.cellWidth;
			grid.graphics.moveTo(xPix, -1);
			grid.graphics.lineTo(xPix, (this.totalHeight * DesignerConfig.cell.cellHeight) + 1);
		}
		grid.graphics.setStrokeDash([DesignerConfig.cell.cellWidth - 2, 2]);
		for (var y = 0; y < this.totalHeight + 1; y++) {
			var yPix = y * DesignerConfig.cell.cellHeight;
			grid.graphics.moveTo(1, yPix);
			grid.graphics.lineTo(this.totalWidth * DesignerConfig.cell.cellWidth, yPix);
		}
	}
	this.cellsContainer.addChild(grid);

	if (this.expansionCells.length) {
		for (var i = 0; i < this.expansionCells.length; i++) {
			this.expansionCells[i].loadExpansionCell(this.expansionCellsContainer);
		}
	}

};

Map.prototype.drawCells = function(stage) {
	if (!stage.contains(this.cellsContainer)) {
		stage.addChildAt(this.cellsContainer, 0);
	}
	stage.update();
};

Map.prototype.hideCells = function(stage) {
	if (stage.contains(this.cellsContainer)) {
		stage.removeChild(this.cellsContainer);
	}
	stage.update();
};

Map.prototype.drawExpansions = function(stage) {
	if (!stage.contains(this.expansionCellsContainer)) {
		stage.addChild(this.expansionCellsContainer);
	}
	stage.update();
};

Map.prototype.hideExpansions = function(stage) {
	if (stage.contains(this.expansionCellsContainer)) {
		stage.removeChild(this.expansionCellsContainer);
	}
	stage.update();
};

Map.prototype.mouseMove = function(e) {
	var p = this.cellsContainer.globalToLocal(e.stageX, e.stageY);
	if (p.x < 0 || p.y < 0 ||
		p.x > this.totalWidth * DesignerConfig.cell.cellWidth || p.y > this.totalHeight * DesignerConfig.cell.cellHeight) {
		this.highlight.disable();
		this.toolTip.hide();
		return;
	}
	var c = this.findCellFromLocalCoords(p.x, p.y);
	if (c.length) {
		this.highlight.enable();
		this.highlight.setPosition(c[0], c[1]);
		this.managerOverseer.mouseMove(c[0], c[1]);
		var strIdx = this.structureManager.getStructure(c[0], c[1]);
		if (strIdx > -1) {
			this.toolTip.show(e.stageX, e.stageY, this.structures.buildings[strIdx]);
		} else {
			this.toolTip.hide();
		}
	} else {
		this.highlight.disable();
		this.toolTip.hide();
	}
};

Map.prototype.mouseClick = function(e) {
	var p = this.cellsContainer.globalToLocal(e.stageX, e.stageY);
	if (p.x < 0 || p.y < 0 ||
		p.x > this.totalWidth * DesignerConfig.cell.cellWidth || p.y > this.totalHeight * DesignerConfig.cell.cellHeight) {
		return;
	}
	var c = this.findCellFromLocalCoords(p.x, p.y);
	if (c.length) {
		this.managerOverseer.mouseClick(c[0], c[1]);
	}
};

Map.prototype.findCellFromLocalCoords = function(x, y) {
	// Find the quadrant we're in
	// Assumes map width & height are divisible by 2
	var quad = [];
	for (var qX = 0; qX < 2; qX++) {
		var qXPix = qX * ((this.totalWidth / 2) * DesignerConfig.cell.cellWidth);
		var qXWidth = qXPix + ((this.totalWidth / 2) * DesignerConfig.cell.cellWidth);
		if (x < qXPix || x > qXWidth) {
			continue;
		}
		for (var qY = 0; qY < 2; qY++) {
			var qYPix = qY * ((this.totalHeight / 2) * DesignerConfig.cell.cellHeight);
			var qYHeight = qYPix + ((this.totalHeight / 2) * DesignerConfig.cell.cellHeight);
			if (y > qYPix && y < qYHeight) {
				quad = [qX, qY];
				break;
			}
		}
		break;
	}

	if (!quad.length) { return []; }

	// Find bounding box in quadrant
	// Assumes quadrants total cells are a square root of 5
	var box = [];
	var boxXQuadPix = (((this.totalWidth / 2) * quad[0]) * DesignerConfig.cell.cellWidth);
	var boxYQuadPix = (((this.totalHeight / 2) * quad[1]) * DesignerConfig.cell.cellHeight);
	for (var boxX = 0; boxX < ((this.totalWidth / 2) / 5); boxX++) {
		var boxXPix = (boxX * 5 * DesignerConfig.cell.cellWidth) + boxXQuadPix;
		var boxXWidth = boxXPix + (5 * DesignerConfig.cell.cellWidth);
		if (x < boxXPix || x > boxXWidth) { continue; }
		for (var boxY = 0; boxY < ((this.totalHeight / 2) / 5); boxY++) {
			var boxYPix = (boxY * 5 * DesignerConfig.cell.cellHeight) + boxYQuadPix;
			var boxYHeight = boxYPix + (5 * DesignerConfig.cell.cellHeight);
			if (y >= boxYPix && y <= boxYHeight) {
				box = [boxX, boxY];
			}
		}
		break;
	}

	if (!box.length) { return []; }

	// Now that we've narrowed the area down to a box with only a few cells in it, find the actual cell
	var boxXQuadPixel = ((this.totalWidth / 2) * quad[0]) * DesignerConfig.cell.cellWidth;
	var boxXPixel = (box[0] * 5 * DesignerConfig.cell.cellWidth) + boxXQuadPixel;
	var boxYQuadPixel = ((this.totalHeight / 2) * quad[1]) * DesignerConfig.cell.cellHeight;
	var boxYPixel = (box[1] * 5 * DesignerConfig.cell.cellHeight) + boxYQuadPixel;
	for (var cellX = 0; cellX < ((this.totalWidth / 2) / 5); cellX++) {
		var cellXPix = boxXPixel + (cellX * DesignerConfig.cell.cellWidth);
		var cellXWidth = cellXPix + DesignerConfig.cell.cellWidth;
		if (x < cellXPix || x > cellXWidth) { continue; }
		for (var cellY = 0; cellY < ((this.totalHeight / 2) / 5); cellY++) {
			var cellYPix = boxYPixel + (cellY * DesignerConfig.cell.cellHeight);
			var cellYHeight = cellYPix + DesignerConfig.cell.cellHeight;
			if (y >= cellYPix && y <= cellYHeight) {
				return [((this.totalWidth / 2) * quad[0]) + (box[0] * 5) + cellX,
				((this.totalHeight / 2) * quad[1]) + (box[1] * 5) + cellY];
			}
		}
		break;
	}
};

Map.prototype.serializeStructures = function() {
	var data = { 'roads' : [], 'buildings' : [] };
	var i;
	for (i = 0; i < this.structures.roads.length; i++) {
		var dataRef = eval("buildingData.road."+this.structures.roads[i].type);
		data['roads'].push({'x': this.structures.roads[i].x, 'y': this.structures.roads[i].y, 'id': dataRef.id });
	}
	for (i = 0; i < this.structures.buildings.length; i++) {
		var baseData;
		for (var n = 0; n < this.baseToMapData.length; n++) {
			if (this.structures.buildings[i] instanceof this.baseToMapData[n].baseClass) {
				baseData = this.baseToMapData[n].mapPath;
				break;
			}
		}
		data['buildings'].push({'x': this.structures.buildings[i].x,
								'y': this.structures.buildings[i].y,
								'id': baseData[this.structures.buildings[i].type].id,
								'o': this.structures.buildings[i].orientation });
	}
	return data;
};

Map.prototype.deserializeStructures = function(dataObj) {
	var i;
	var classString;
	var objClass;
	var obj;
	if (dataObj.roads !== undefined && dataObj.roads !== null && dataObj.roads instanceof Array && dataObj.roads.length > 0) {
		for (i = 0; i < dataObj.roads.length; i++) {
			if (dataObj.roads[i].x !== undefined &&
				dataObj.roads[i].x >= 0 &&
				dataObj.roads[i].y !== undefined &&
				dataObj.roads[i].y >= 0 &&
				dataObj.roads[i].id !== undefined &&
				dataObj.roads[i].id >= 0) {
				classString = this.findClassById(dataObj.roads[i].id);
				if (!classString) { continue; }
				objClass = eval(classString);
				this.roadManager.checkUpdateRoad(dataObj.roads[i].x, dataObj.roads[i].y, objClass, this.stage);
			}
		}
	}
	if (dataObj.buildings !== undefined && dataObj.buildings !== null && dataObj.buildings instanceof Array && dataObj.buildings.length > 0) {
		for (i = 0; i < dataObj.buildings.length; i++) {
			if (dataObj.buildings[i].x !== undefined &&
				dataObj.buildings[i].x >= 0 &&
				dataObj.buildings[i].y !== undefined &&
				dataObj.buildings[i].y >= 0 &&
				dataObj.buildings[i].id !== undefined &&
				dataObj.buildings[i].id >= 0) {
				classString = this.findClassById(dataObj.buildings[i].id);
				if (!classString) { continue; }
				objClass = eval(classString);
				if (dataObj.buildings[i].o !== undefined && dataObj.buildings[i].o > 0) {
					this.structureManager.checkUpdateStructure(dataObj.buildings[i].x, dataObj.buildings[i].y, objClass, this.stage, dataObj.buildings[i].o);
				} else {
					this.structureManager.checkUpdateStructure(dataObj.buildings[i].x, dataObj.buildings[i].y, objClass, this.stage, 0);
				}
			}
		}
	}
	this.effectAreaManager.initStructures();
	this.statisticsManager.recalculateSums();
	this.stage.update();
};

Map.prototype.findClassById = function(id) {
	for (var key in buildingData) {
		for (var type in buildingData[key]) {
			if (buildingData[key][type].id == id) {
				return buildingData[key][type].classString;
			}
		}
	}
	return null;
};

