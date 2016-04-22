
function FourLaneRoad(_x, _y) {
	this.type = "fourLane";
	var data = eval("buildingData.road."+this.type);
	this.title = data.title;
	this.label = data.label;
	this.price = data.price;
	this.currency = data.currency;
	this.bgDefaultColor = buildingData.road.config.bgDefaultColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "FourLaneRoad ("+this.x+","+this.y+")";
}

FourLaneRoad.prototype = new RoadBase();
