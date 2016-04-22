
function RoadManager(_roads, _roadsContainer) {
	this.roads = _roads;
	this.roadsContainer = _roadsContainer;
}

RoadManager.prototype.updateRoad = function(x, y, stage) {
	var i = this.getRoadCell(x, y);
	if (UIState.whichButton.id == "clearRoadButton") {
		this.checkClearRoad(x, y, stage);
	} else if (UIState.whichButton.id == "twoLaneRoadButton") {
		this.checkUpdateRoad(x, y, TwoLaneRoad, stage);
	} else if (UIState.whichButton.id == "fourLaneRoadButton") {
		this.checkUpdateRoad(x, y, FourLaneRoad, stage);
	} else if (UIState.whichButton.id == "sixLaneRoadButton") {
		this.checkUpdateRoad(x, y, SixLaneRoad, stage);
	} else if (UIState.whichButton.id == "avenueRoadButton") {
		this.checkUpdateRoad(x, y, AvenueRoad, stage);
	} else if (UIState.whichButton.id == "boulevardRoadButton") {
		this.checkUpdateRoad(x, y, BoulevardRoad, stage);
	} else if (UIState.whichButton.id == "streetcarRoadButton") {
		this.checkUpdateRoad(x, y, StreetcarRoad, stage);
	}
};

RoadManager.prototype.checkUpdateRoad = function(x, y, roadClass, stage) {
	this.checkClearRoad(x, y, stage);
	var road = new roadClass(x, y);
	this.roads.push(road);
	road.loadRoad(this.roadsContainer);
	stage.update();
};

RoadManager.prototype.checkClearRoad = function(x, y, stage) {
	var i = this.getRoadCell(x, y);
	if (i > -1) {
		this.roads[i].unloadRoad(this.roadsContainer);
		this.roads.splice(i, 1);
		stage.update();
	}
};

RoadManager.prototype.getRoadCell = function(x, y) {
	for (var i = 0; i < this.roads.length; i++) {
		if (this.roads[i].x == x && this.roads[i].y == y) {
			return i;
		}
	}
	return -1;
};