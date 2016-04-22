
function StatisticsManager(_structures) {
	this.structures = _structures;
	this.capacityUsage = 0;
	this.dataMap = {
		"1.0.0": {
			"label" : "Estimated Popuation",
			"count" : 0
		},
		"2.0.0" : {
			"label" : "Total Buildings",
			"count" : 0,
			"class" : StructureBase,
			"children" : [
				{
					"2.1.0" : {
						"label" : "Residential",
						"count" : 0,
						"class" : ResidentialBase,
						"children" : [
						{
							"2.1.1" : {
								"count" : 0,
								"class" : ResidentialZone
							}
						},
						{
							"2.1.2" : {
								"count" : 0,
								"class" : LondonZone
							}
						},
						{
							"2.1.3" : {
								"count" : 0,
								"class" : ParisianZone
							}
						},
						{
							"2.1.4" : {
								"count" : 0,
								"class" : TokyoZone
							}
						}
						]
					}
				},
				{
					"2.2.0" : {
						"label" : "Commercial",
						"count" : 0,
						"class" : CommercialBase,
						"children" : []
					}
				},
				{
					"2.3.0" : {
						"label" : "Industrial",
						"count" : 0,
						"class" : IndustrialBase,
						"children" : [
							{
								"2.3.1" : {
									"count" : 0,
									"class" : SmallIndustry
								}
							},
							{
								"2.3.2" : {
									"count" : 0,
									"class" : BasicIndustry
								}
							},
							{
								"2.3.3" : {
									"count" : 0,
									"class" : MassProductionIndustry
								}
							},
							{
								"2.3.4" : {
									"count" : 0,
									"class" : HighTechIndustry
								}
							},
							{
								"2.3.5" : {
									"count" : 0,
									"class" : NanoTechIndustry
								}
							},
						]
					}
				},
				{
					"2.4.0" : {
						"label" : "Fire",
						"count" : 0,
						"class" : FireBase,
						"children" : [
							{
								"2.4.1" : {
									"count" : 0,
									"class" : SmallFireStation
								}
							},
							{
								"2.4.2" : {
									"count" : 0,
									"class" : BasicFireStation
								}
							},
							{
								"2.4.3" : {
									"count" : 0,
									"class" : DeluxeFireStation
								}
							},
						]
					}
				},
				{
					"2.5.0" : {
						"label" : "Police",
						"count" : 0,
						"class" : PoliceBase,
						"children" : [
							{
								"2.5.1" : {
									"count" : 0,
									"class" : SmallPoliceStation
								}
							},
							{
								"2.5.2" : {
									"count" : 0,
									"class" : BasicPoliceStation
								}
							},
							{
								"2.5.3" : {
									"count" : 0,
									"class" : PolicePrecinct
								}
							},
						]
					}
				},
				{
					"2.6.0" : {
						"label" : "Health",
						"count" : 0,
						"class" : HealthBase,
						"children" : [
							{
								"2.6.1" : {
									"count" : 0,
									"class" : SmallHealthClinic
								}
							},
							{
								"2.6.2" : {
									"count" : 0,
									"class" : HealthClinic
								}
							},
							{
								"2.6.3" : {
									"count" : 0,
									"class" : Hospital
								}
							},
						]
					}
				},
				{
					"2.7.0" : {
						"label" : "Power",
						"count" : 0,
						"class" : PowerBase,
						"children" : [
							{
								"2.7.1" : {
									"count" : 0,
									"class" : WindPower
								}
							},
							{
								"2.7.2" : {
									"count" : 0,
									"class" : CoalPower
								}
							},
							{
								"2.7.3" : {
									"count" : 0,
									"class" : DeluxeWindPower
								}
							},
							{
								"2.7.4" : {
									"count" : 0,
									"class" : SolarPower
								}
							},
							{
								"2.7.5" : {
									"count" : 0,
									"class" : OilPower
								}
							},
							{
								"2.7.6" : {
									"count" : 0,
									"class" : NuclearPower
								}
							},
							{
								"2.7.7" : {
									"count" : 0,
									"class" : FusionPower
								}
							},
						]
					}
				},
				{
					"2.8.0" : {
						"label" : "Water",
						"count" : 0,
						"class" : WaterBase,
						"children" : [
							{
								"2.8.1" : {
									"count" : 0,
									"class" : WaterTower
								}
							},
							{
								"2.8.2" : {
									"count" : 0,
									"class" : WaterPumpingStation
								}
							},
						]
					}
				},
				{
					"2.9.0" : {
						"label" : "Sewage",
						"count" : 0,
						"class" : SewageBase,
						"children" : [
							{
								"2.9.1" : {
									"count" : 0,
									"class" : SmallSewage
								}
							},
							{
								"2.9.2" : {
									"count" : 0,
									"class" : BasicSewage
								}
							},
							{
								"2.9.3" : {
									"count" : 0,
									"class" : DeluxeSewage
								}
							},
						]
					}
				},
				{
					"2.10.0" : {
						"label" : "Waste Management",
						"count" : 0,
						"class" : WasteManagementBase,
						"children" : [
							{
								"2.10.1" : {
									"count" : 0,
									"class" : SmallGarbageDump
								}
							},
							{
								"2.10.2" : {
									"count" : 0,
									"class" : GarbageDump
								}
							},
							{
								"2.10.3" : {
									"count" : 0,
									"class" : GarbageIncinerator
								}
							},
							{
								"2.10.4" : {
									"count" : 0,
									"class" : RecyclingCenter
								}
							},
						]
					}
				},
				{
					"2.11.0" : {
						"label" : "Parks",
						"count" : 0,
						"class" : ParkBase,
						"children" : [
							{
								"2.11.1" : {
									"count" : 0,
									"class" : AnchorPark
								}
							},
							{
								"2.11.2" : {
									"count" : 0,
									"class" : BallOfTwine
								}
							},
							{
								"2.11.3" : {
									"count" : 0,
									"class" : BasketballCourt
								}
							},
							{
								"2.11.4" : {
									"count" : 0,
									"class" : Dolly
								}
							},
							{
								"2.11.5" : {
									"count" : 0,
									"class" : GiantGardenGnome
								}
							},
							{
								"2.11.6" : {
									"count" : 0,
									"class" : JoggingPath
								}
							},
							{
								"2.11.7" : {
									"count" : 0,
									"class" : LlarryTheLlama
								}
							},
							{
								"2.11.8" : {
									"count" : 0,
									"class" : ModernArtPark
								}
							},
							{
								"2.11.9" : {
									"count" : 0,
									"class" : PeacefulPark
								}
							},
							{
								"2.11.10" : {
									"count" : 0,
									"class" : PlumbobPark
								}
							},
							{
								"2.11.11" : {
									"count" : 0,
									"class" : ReflectingPoolPark
								}
							},
							{
								"2.11.12" : {
									"count" : 0,
									"class" : RowOfTrees
								}
							},
							{
								"2.11.13" : {
									"count" : 0,
									"class" : SakuraPark
								}
							},
							{
								"2.11.14" : {
									"count" : 0,
									"class" : SculptureGarden
								}
							},
							{
								"2.11.15" : {
									"count" : 0,
									"class" : SkatePark
								}
							},
							{
								"2.11.16" : {
									"count" : 0,
									"class" : SmallFountainPark
								}
							},
							{
								"2.11.17" : {
									"count" : 0,
									"class" : SoccerField
								}
							},
							{
								"2.11.18" : {
									"count" : 0,
									"class" : TokyoTownGate
								}
							},
							{
								"2.11.19" : {
									"count" : 0,
									"class" : UrbanPlaza
								}
							},
							{
								"2.11.20" : {
									"count" : 0,
									"class" : WaterParkPlayground
								}
							},
						]
					}
				},
				{
					"2.12.0" : {
						"label" : "Education",
						"count" : 0,
						"class" : EducationBase,
						"children" : [
							{
								"2.12.1" : {
									"count" : 0,
									"class" : GradeSchool
								}
							},
							{
								"2.12.2" : {
									"count" : 0,
									"class" : PublicLibrary
								}
							},
							{
								"2.12.3" : {
									"count" : 0,
									"class" : HighSchool
								}
							},
							{
								"2.12.4" : {
									"count" : 0,
									"class" : CommunityCollege
								}
							},
							{
								"2.12.5" : {
									"count" : 0,
									"class" : University
								}
							},
						]
					}
				},
				{
					"2.13.0" : {
						"label" : "Government",
						"count" : 0,
						"class" : GovernmentBase,
						"children" : []
					}
				},
			]
		},
		"3.0.0": {
			"label" : "Total Roads",
			"count" : 0,
			"class" : RoadBase,
			"children" : [
				{
					"3.1.0" : {
						"count" : 0,
						"class" : TwoLaneRoad,
					}
				},
				{
					"3.2.0" : {
						"count" : 0,
						"class" : FourLaneRoad,
					}
				},
				{
					"3.3.0" : {
						"count" : 0,
						"class" : SixLaneRoad,
					}
				},
				{
					"3.4.0" : {
						"count" : 0,
						"class" : AvenueRoad,
					}
				},
				{
					"3.5.0" : {
						"count" : 0,
						"class" : BoulevardRoad,
					}
				},
				{
					"3.6.0" : {
						"count" : 0,
						"class" : StreetcarRoad,
					}
				},
			]
		},
		"4.0.0": {
			"label" : "Gold Spent",
			"count" : 0
		},
		"5.0.0": {
			"label" : "Keys Spent",
			"count" : 0
		},
		"6.0.0": {
			"label" : "SimCash Spent",
			"count" : 0
		},
		"7.0.0": {
			"label" : "Power Capacity",
			"count" : 0
		},
		"8.0.0": {
			"label" : "Water Capacity",
			"count" : 0
		},
		"9.0.0": {
			"label" : "Sewage Capacity",
			"count" : 0
		},
		"10.0.0": {
			"label" : "Waste Management Capacity",
			"count" : 0
		},
	};
}
StatisticsManager.prototype.init = function() {
	var data = this.buildDataFromMap(this.dataMap);
	this.tree = $('#statsTree').jstree({
        'core': {
            'data': data,
            'themes' : {
				'dots' : false,
				'icons': false
            },
            'check_callback': true
        },

    }).bind("select_node.jstree", function (event, data) {
		return data.instance.toggle_node(data.node);
	});
    var _this = this;
    $('#statsTree').on('ready.jstree', function() {
		_this.tree = $('#statsTree').jstree(true);
		_this.recalculateSums();
    });
};

StatisticsManager.prototype.recalculateSums = function() {
	this.updateCapacityUsage();
	this.sumPowerCapacity();
	this.sumWaterCapacity();
	this.sumSewageCapacity();
	this.sumWasteCapacity();
	this.sumGold();
	this.sumKeys();
	this.sumCash();
	this.sumBuildings();
	this.sumRoads();
	this.estimatePopulation();
};

StatisticsManager.prototype.sumGold = function() {
	this.dataMap['4.0.0'].count = this.sumPrice('gold');
	this.updateNode('4.0.0');
};

StatisticsManager.prototype.sumKeys = function() {
	this.dataMap['5.0.0'].count = this.sumPrice('key');
	this.updateNode('5.0.0');
};

StatisticsManager.prototype.sumCash = function() {
	this.dataMap['6.0.0'].count = this.sumPrice('cash');
	this.updateNode('6.0.0');
};

StatisticsManager.prototype.sumPowerCapacity = function() {
	this.dataMap['7.0.0'].count = this.sumCapacity(PowerBase);
	this.updateNode('7.0.0', this.capacityUsage > this.dataMap['7.0.0'].count);
};

StatisticsManager.prototype.sumWaterCapacity = function() {
	this.dataMap['8.0.0'].count = this.sumCapacity(WaterBase);
	this.updateNode('8.0.0', this.capacityUsage > this.dataMap['8.0.0'].count);
};

StatisticsManager.prototype.sumSewageCapacity = function() {
	this.dataMap['9.0.0'].count = this.sumCapacity(SewageBase);
	this.updateNode('9.0.0', this.capacityUsage > this.dataMap['9.0.0'].count);
};

StatisticsManager.prototype.sumWasteCapacity = function() {
	this.dataMap['10.0.0'].count = this.sumCapacity(WasteManagementBase);
	this.updateNode('10.0.0', this.capacityUsage > this.dataMap['10.0.0'].count);
};

StatisticsManager.prototype.updateCapacityUsage = function() {
	this.capacityUsage = 0;
	for (var i = 0; i < this.structures.buildings.length; i++) {
		if (this.structures.buildings[i] instanceof ResidentialBase) {
			this.capacityUsage++;
		}
	}
};

StatisticsManager.prototype.sumCapacity = function(sumClass) {
	var sum = 0;
	for (var i = 0; i < this.structures.buildings.length; i++) {
		if (this.structures.buildings[i] instanceof sumClass) {
			sum += this.structures.buildings[i].capacity;
		}
	}
	return sum;
};

StatisticsManager.prototype.sumPrice = function(currency) {
	var sum = 0;
	var i;
	for (i = 0; i < this.structures.buildings.length; i++) {
		if (this.structures.buildings[i].price !== undefined &&
			this.structures.buildings[i].price > 0 &&
			this.structures.buildings[i].currency == currency) {
			sum += this.structures.buildings[i].price;
		}
	}
	for (i = 0; i < this.structures.roads.length; i++) {
		if (this.structures.roads[i].price !== undefined &&
			this.structures.roads[i].price > 0 &&
			this.structures.roads[i].currency == currency) {
			sum += this.sumRoadHeirarchy(this.structures.roads[i]);
		}
	}
	return sum;
};

StatisticsManager.prototype.sumRoadHeirarchy = function(roadObj) {
	var sum = roadObj.price;
	var tmpRd;
	if (roadObj instanceof StreetcarRoad) {
		tmpRd = new BoulevardRoad();
		sum += tmpRd.price;
		tmpRd = new AvenueRoad();
		sum += tmpRd.price;
		tmpRd = new SixLaneRoad();
		sum += tmpRd.price;
		tmpRd = new FourLaneRoad();
		sum += tmpRd.price;
		tmpRd = new TwoLaneRoad();
		sum += tmpRd.price;
	} else if (roadObj instanceof BoulevardRoad) {
		tmpRd = new AvenueRoad();
		sum += tmpRd.price;
		tmpRd = new SixLaneRoad();
		sum += tmpRd.price;
		tmpRd = new FourLaneRoad();
		sum += tmpRd.price;
		tmpRd = new TwoLaneRoad();
		sum += tmpRd.price;
	} else if (roadObj instanceof AvenueRoad) {
		tmpRd = new SixLaneRoad();
		sum += tmpRd.price;
		tmpRd = new FourLaneRoad();
		sum += tmpRd.price;
		tmpRd = new TwoLaneRoad();
		sum += tmpRd.price;
	} else if (roadObj instanceof SixLaneRoad) {
		tmpRd = new FourLaneRoad();
		sum += tmpRd.price;
		tmpRd = new TwoLaneRoad();
		sum += tmpRd.price;
	} else if (roadObj instanceof FourLaneRoad) {
		tmpRd = new TwoLaneRoad();
		sum += tmpRd.price;
	}
	return sum;
};

StatisticsManager.prototype.sumBuildings = function(baseObj, id) {
	if (baseObj === undefined) {
		baseObj = this.dataMap;
		id = '2.0.0';
	}
	baseObj[id].count = this.sumBuilding(baseObj[id]['class']);
	this.updateNode(id, false, baseObj[id]);
	if (baseObj[id].children && baseObj[id].children.length > 0) {
		for (var i = 0; i < baseObj[id].children.length; i++) {
			for (var cid in baseObj[id].children[i]) {
				this.sumBuildings(baseObj[id].children[i], cid);
			}
		}
	}
};

StatisticsManager.prototype.sumBuilding = function(buildingClass) {
	var sum = 0;
	for (var i = 0; i < this.structures.buildings.length; i++) {
		if (this.structures.buildings[i] instanceof buildingClass) {
			sum++;
		}
	}
	return sum;
};

StatisticsManager.prototype.sumRoads = function(baseObj, id) {
	if (baseObj === undefined) {
		baseObj = this.dataMap;
		id = '3.0.0';
	}
	baseObj[id].count = this.sumRoad(baseObj[id]['class']);
	this.updateNode(id, false, baseObj[id]);
	if (baseObj[id].children && baseObj[id].children.length > 0) {
		for (var i = 0; i < baseObj[id].children.length; i++) {
			for (var cid in baseObj[id].children[i]) {
				this.sumRoads(baseObj[id].children[i], cid);
			}
		}
	}
};

StatisticsManager.prototype.sumRoad = function(roadClass) {
	var sum = 0;
	for (var i = 0; i < this.structures.roads.length; i++) {
		if (this.structures.roads[i] instanceof roadClass) {
			sum++;
		}
	}
	return sum;
};

StatisticsManager.prototype.estimatePopulation = function() {
	var popBuildings = [];
	var popBoosters = [];
	var i;
	var buildings = this.structures.buildings;
	this.dataMap['1.0.0'].count = 0;
	for (i = 0; i < buildings.length; i++) {
		if (buildings[i] instanceof ResidentialBase) {
			popBuildings.push(buildings[i]);
			continue;
		}
		if (buildings[i].populationBoost !== undefined && buildings[i].populationBoost > 0) {
			popBoosters.push(buildings[i]);
		}
	}
	for (i = 0; i < popBuildings.length; i++) {
		var sumBoost = 1;
		for (var b = 0; b < popBoosters.length; b++) {
			var boostArea = popBoosters[b].getEffectArea();
			if (popBuildings[i].getX() + popBuildings[i].getWidth() <= boostArea.x ||
				popBuildings[i].getX() >= boostArea.x + boostArea.width ||
				popBuildings[i].getY() + popBuildings[i].getHeight() <= boostArea.y ||
				popBuildings[i].getY() >= boostArea.y + boostArea.height) { continue; }
			sumBoost += popBoosters[b].populationBoost;
		}
		this.dataMap['1.0.0'].count += Math.floor(popBuildings[i].maxPopulation * sumBoost);
	}
	this.updateNode('1.0.0');
};

StatisticsManager.prototype.updateNode = function(id, overCapacity, dataObj) {
	var node = this.tree.get_node(id);
	var label = this.newTreeLabel(this.getLabel(dataObj ? dataObj : this.dataMap[id]),
		dataObj ? dataObj.count : this.dataMap[id].count,
		overCapacity);
	this.tree.rename_node(node, label);
};

StatisticsManager.prototype.buildDataFromMap = function(baseObj) {
	var data = [];
	for (var id in baseObj) {
		var node = this.newTreeNode(this.newTreeLabel(this.getLabel(baseObj[id]), baseObj[id].count), id);
		if (baseObj[id].children !== undefined && baseObj[id].children.length > 0) {
			for (var i = 0; i < baseObj[id].children.length; i++) {
				var ch = this.buildDataFromMap(baseObj[id].children[i]);
				if (ch && ch.length) {
					node.children.push(ch[0]);
				}
			}
		}
		data.push(node);
	}
	return data;
};

StatisticsManager.prototype.getLabel = function(mapObj) {
	if (mapObj.label !== undefined) { return mapObj.label; }
	var obj = new mapObj['class']();
	return obj.title + "s";
};

StatisticsManager.prototype.newTreeNode = function(label, id) {
	return {
		"id": id,
		"text": label,
		"icon": "",
		"state": {
			"opened": false,
			"disabled": false,
			"selected": false
		},
		"children": []
	};
};

StatisticsManager.prototype.newTreeLabel = function(label, count, overCapacity) {
	if (overCapacity) {
		return "<span style='color: red;'><span style='float: left; width: 240px;'>"+label+":</span>&nbsp;"+count+"</span>";
	}
	return "<span style='float: left; width: 240px;'>"+label+":</span>&nbsp;"+count;
};
