
function SixLaneRoad(_x, _y) {
	this.type = "sixLane";
	var data = eval("buildingData.road."+this.type);
	this.title = data.title;
	this.label = data.label;
	this.price = data.price;
	this.currency = data.currency;
	this.bgDefaultColor = buildingData.road.config.bgDefaultColor;
	this.x = _x;
	this.y = _y;
	this.shape = new createjs.Shape();
	this.shape.name = "SixLaneRoad ("+this.x+","+this.y+")";
}

SixLaneRoad.prototype = new RoadBase();
