
var UIState = {
	buttonOn : false,
	whichButton : null,
	mouseIsDown: false,
	showToolTipsOnButtons: true,
	showToolTipsOnMap: true,
	drawDirty: false,
	drawFireCoverage: false,
	drawPoliceCoverage: false,
	drawHealthCoverage: false,
	drawParkCoverage: false,
	drawEducationCoverage: false,
};

var buttonToClass = {
	"twoLaneRoadButton" : TwoLaneRoad,
	"fourLaneRoadButton" : FourLaneRoad,
	"sixLaneRoadButton" : SixLaneRoad,
	"avenueRoadButton" : AvenueRoad,
	"boulevardRoadButton" : BoulevardRoad,
	"streetcarRoadButton" : StreetcarRoad,
	"residentialButton" : ResidentialZone,
	"parisianButton" : ParisianZone,
	"londonButton" : LondonZone,
	"tokyoButton" : TokyoZone,
	"smallIndustryButton" : SmallIndustry,
	"basicIndustryButton" : BasicIndustry,
	"massProductionIndustryButton" : MassProductionIndustry,
	"highTechIndustryButton" : HighTechIndustry,
	"nanoTechIndustryButton" : NanoTechIndustry,
	"suppliesStoreButton" : SuppliesStore,
	"hardwareStoreButton" : HardwareStore,
	"farmersMarketButton" : FarmersMarket,
	"furnitureStoreButton" : FurnitureStore,
	"gardeningSuppliesButton" : GardeningSupplies,
	"donutShopButton" : DonutShop,
	"fashionStoreButton" : FashionStore,
	"fastFoodRestaurantButton" : FastFoodRestaurant,
	"homeAppliancesButton" : HomeAppliances,
	"coalPowerButton" : CoalPower,
	"windPowerButton" : WindPower,
	"solarPowerButton" : SolarPower,
	"deluxeWindButton" : DeluxeWindPower,
	"oilPowerButton" : OilPower,
	"nuclearPowerButton" : NuclearPower,
	"fusionPowerButton" : FusionPower,
	"waterTowerButton" : WaterTower,
	"waterPumpingStationButton" : WaterPumpingStation,
	"smallSewageButton" : SmallSewage,
	"basicSewageButton" : BasicSewage,
	"deluxeSewageButton" : DeluxeSewage,
	"smallGarbageDumpButton" : SmallGarbageDump,
	"garbageDumpButton" : GarbageDump,
	"garbageIncineratorButton" : GarbageIncinerator,
	"recyclingCenterButton" : RecyclingCenter,
	"smallFireStationButton" : SmallFireStation,
	"basicFireStationButton" : BasicFireStation,
	"deluxeFireStationButton" : DeluxeFireStation,
	"smallPoliceStationButton" : SmallPoliceStation,
	"basicPoliceStationButton" : BasicPoliceStation,
	"policePrecinctButton" : PolicePrecinct,
	"smallHealthClinicButton" : SmallHealthClinic,
	"healthClinicButton" : HealthClinic,
	"hospitalButton" : Hospital,
	"cityHallButton" : CityHall,
	"cityStorageButton" : CityStorage,
	"epicProjectsButton" : EpicProjects,
	"mayorsMansionButton" : MayorsMansion,
	"townHallButton" : TownHall,
	"anchorParkButton" : AnchorPark,
	"ballOfTwineButton" : BallOfTwine,
	"basketballCourtButton" : BasketballCourt,
	"dollyButton" : Dolly,
	"giantGardenGnomeButton" : GiantGardenGnome,
	"joggingPathButton" : JoggingPath,
	"llarryTheLlamaButton" : LlarryTheLlama,
	"modernArtParkButton" : ModernArtPark,
	"peacefulParkButton" : PeacefulPark,
	"plumbobParkButton" : PlumbobPark,
	"reflectingPoolParkButton" : ReflectingPoolPark,
	"rowOfTreesButton" : RowOfTrees,
	"sakuraParkButton" : SakuraPark,
	"sculptureGardenButton" : SculptureGarden,
	"skateParkButton" : SkatePark,
	"smallFountainParkButton" : SmallFountainPark,
	"soccerFieldButton" : SoccerField,
	"tokyoTownGateButton" : TokyoTownGate,
	"urbanPlazaButton" : UrbanPlaza,
	"waterParkPlaygroundButton" : WaterParkPlayground,
	"departmentOfEducationButton" : DepartmentOfEducation,
	"publicLibraryButton" : PublicLibrary,
	"gradeSchoolButton" : GradeSchool,
	"highSchoolButton" : HighSchool,
	"communityCollegeButton" : CommunityCollege,
	"universityButton" : University,
};

function BuildItDesigner(canvasId) {

	this.stage = new createjs.Stage(canvasId);
	this.stage.enableMouseOver();
	this.stage.autoClear = true;
	this.map = new Map(this.stage);

}

BuildItDesigner.prototype.run = function() {

	this.initControls();
	this.map.loadMapData(mapData);
	this.map.loadMapObjects(this.stage);
	this.stage.update();

};

BuildItDesigner.prototype.initControls = function() {

	$(document).mousedown(function(e){
        // Left mouse button was pressed, set flag
        if(e.which === 1) {
			UIState.mouseIsDown = true;
		}
    });
    $(document).mouseup(function(e) {
        // Left mouse button was released, clear flag
        if(e.which === 1) {
			UIState.mouseIsDown = false;
        }
    });
    $(document).mousemove(function(e) {
        if(e.which === 1 && !UIState.mouseIsDown) {
			e.which = 0;
        }
        UIState.mouseIsDown = e.which == 1;
    });
	var _this = this;
	$("#drawExpansions").on("click", function() {
		if ($(this).is(":checked")) {
			_this.map.drawExpansions(_this.stage);
		} else {
			_this.map.hideExpansions(_this.stage);
		}
	});
	$("#drawCells").on("click", function() {
		if ($(this).is(":checked")) {
			_this.map.drawCells(_this.stage);
		} else {
			_this.map.hideCells(_this.stage);
		}
	});
	$("#showToolTipsButtons").on("click", function() {
		UIState.showToolTipsOnButtons = $(this).is(":checked");
	});
	$("#showToolTipsMap").on("click", function() {
		UIState.showToolTipsOnMap = $(this).is(":checked");
	});
	$("#drawDirtyAreas").on("click", function() {
		if ($(this).is(":checked")) {
			UIState.drawDirty = true;
			_this.map.effectAreaManager.drawDirtyAreas();
		} else {
			UIState.drawDirty = false;
			_this.map.effectAreaManager.hideDirtyAreas();
		}
	});
	$("#drawFireCoverage").on("click", function() {
		if ($(this).is(":checked")) {
			UIState.drawFireCoverage = true;
			_this.map.effectAreaManager.drawFireCoverage();
		} else {
			UIState.drawFireCoverage = false;
			_this.map.effectAreaManager.hideFireCoverage();
		}
	});
	$("#drawPoliceCoverage").on("click", function() {
		if ($(this).is(":checked")) {
			UIState.drawPoliceCoverage = true;
			_this.map.effectAreaManager.drawPoliceCoverage();
		} else {
			UIState.drawPoliceCoverage = false;
			_this.map.effectAreaManager.hidePoliceCoverage();
		}
	});
	$("#drawHealthCoverage").on("click", function() {
		if ($(this).is(":checked")) {
			UIState.drawHealthCoverage = true;
			_this.map.effectAreaManager.drawHealthCoverage();
		} else {
			UIState.drawHealthCoverage = false;
			_this.map.effectAreaManager.hideHealthCoverage();
		}
	});
	$("#drawParkCoverage").on("click", function() {
		if ($(this).is(":checked")) {
			UIState.drawParkCoverage = true;
			_this.map.effectAreaManager.drawParkCoverage();
		} else {
			UIState.drawParkCoverage = false;
			_this.map.effectAreaManager.hideParkCoverage();
		}
	});
	$("#drawEducationCoverage").on("click", function() {
		if ($(this).is(":checked")) {
			UIState.drawEducationCoverage = true;
			_this.map.effectAreaManager.drawEducationCoverage();
		} else {
			UIState.drawEducationCoverage = false;
			_this.map.effectAreaManager.hideEducationCoverage();
		}
	});
	var toggleButtonClick = function() {
		var hasClass = $(this).hasClass("down");
		$('.toggleButton').removeClass("down");
		if (!hasClass) {
			$(this).addClass("down");
		}
		hasClass = $(this).hasClass("down");
		UIState.buttonOn = hasClass;
		UIState.whichButton = (hasClass ? this : null);
		if (hasClass) {
			var id = UIState.whichButton.id;
			if (id.substring(UIState.whichButton.id.length - 10) == "RoadButton") {
				_this.map.highlight.setDefault();
			} else if (id == "rotateBuildingButton") {
				_this.map.highlight.setDefault();
			} else if (id == "rotateHighlightButton") {
			} else if (id == "clearBuildingButton") {
				_this.map.highlight.setDefault();
			} else {
				_this.map.highlight.setDefault();
				_this.map.highlight.setZone(new buttonToClass[id]());
			}
		} else {
			_this.map.highlight.setDefault();
		}
	};

	$('#rotateHighlightButton').button({icons: {primary: "ui-icon-arrowrefresh-1-e"}}).click(function() {
		_this.map.highlight.rotate();
	});
	$('.toggleButton').click(toggleButtonClick);

	$(document).tooltip({
		'items' : "a",
		'track': true,
		'content' : function () {
			var el = $(this);
			if (UIState.showToolTipsOnButtons && el.hasClass("toggleButton") && !el.hasClass("toggleButtonSpecial")) {
				return _this.map.toolTip.getToolTipContent(el.attr('id'));
			}
		}
	});
	$("#saveMapDataDialog").dialog({
      autoOpen: false,
      width: 'auto',
      height: 'auto',
    });
	var loadDialog = $("#loadMapDataDialog").dialog({
		autoOpen: false,
		width: 'auto',
		height: 'auto',
		buttons: {
			"Load Data": function() {
				loadDialog.dialog("close");
				var str = $("#loadMapDataText").val();
				if (!str || !str.length) { return; }
				var dataObj;
				try {
					dataObj = JSON.parse(str);
				} catch(err) {
					$("#errorMessage").html("Error Parsing Data: "+err);
					$("#errorDialog").dialog("open");
					return;
				}
				_this.map.deserializeStructures(dataObj);
			},
			Cancel: function() {
				loadDialog.dialog("close");
			}
		},
    });
    var errorDialog = $("#errorDialog").dialog({
		autoOpen: false,
		width: 'auto',
		height: 'auto',
		buttons: {
			Ok: function() {
				errorDialog.dialog("close");
			}
		}
	});

	$('#saveButton').on('click', function() {
		$("#saveMapDataText").val(JSON.stringify(_this.map.serializeStructures()));
		$("#saveMapDataDialog").dialog("open");
	});
	$('#loadButton').on('click', function() {
		$("#loadMapDataDialog").dialog("open");
	});
};
