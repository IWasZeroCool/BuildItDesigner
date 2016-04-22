
var buildingData = {
	road : {
		config : {
			bgDefaultColor	: 'rgba(163, 163, 163, 1)'
		},
		twoLane : {
			id				: 1,
			classString		: 'TwoLaneRoad',
			title			: "Two Lane Highway",
			label			: "2",
			price			: 0,
			currency		: "gold",
		},
		fourLane : {
			id				: 2,
			classString		: 'FourLaneRoad',
			title			: "Four Lane Highway",
			label			: "4",
			price			: 300,
			currency		: "gold"
		},
		sixLane : {
			id				: 3,
			classString		: 'SixLaneRoad',
			title			: "Six Lane Highway",
			label			: "6",
			price			: 1200,
			currency		: "gold"
		},
		avenue : {
			id				: 4,
			classString		: 'AvenueRoad',
			title			: "Avenue",
			label			: "A",
			price			: 1500,
			currency		: "gold"
		},
		boulevard : {
			id				: 5,
			classString		: 'BoulevardRoad',
			title			: "Boulevard",
			label			: "B",
			price			: 2000,
			currency		: "gold"
		},
		streetcar : {
			id				: 6,
			classString		: 'StreetcarRoad',
			title			: "Streetcar",
			label			: "S",
			price			: 2500,
			currency		: "gold"
		}
	},
	residential : {
		config : {
			bgDefaultColor		: 'rgba(12, 176, 12, 0.7)',
			outlineDefaultColor	: 'rgba(40, 240, 40, 1)'
		},
		residentialZone : {
			id					: 7,
			classString			: 'ResidentialZone',
			title				: "Residential Zone",
			label				: "Res",
			width				: 2,
			height				: 2,
			maxPopulation		: 1836
		},
		parisianZone : {
			id					: 8,
			classString			: 'ParisianZone',
			title				: "Parisian Zone",
			label				: "Par",
			width				: 2,
			height				: 2,
			maxPopulation		: 2019
		},
		londonZone : {
			id					: 9,
			classString			: 'LondonZone',
			title				: "London Town Zone",
			label				: "Lon",
			width				: 2,
			height				: 2,
			maxPopulation		: 2111
		},
		tokyoZone : {
			id					: 10,
			classString			: 'TokyoZone',
			title				: "Tokyo Town Zone",
			label				: "Tok",
			width				: 2,
			height				: 2,
			maxPopulation		: 2204
		}
	},
	industrial : {
		config : {
			bgDefaultColor				: 'rgba(152, 81, 10, 0.7)',
			outlineDefaultColor			: 'rgba(219, 117, 15, 1)',
			bgDefaultDirtyColor			: 'rgba(152, 81, 10, 0.3)',
			outlineDefaultDirtyColor	: 'rgba(219, 117, 15, 1)'
		},
		small : {
			id							: 11,
			classString					: 'SmallIndustry',
			title						: "Small Factory",
			label						: "Sm",
			width						: 2,
			height						: 2,
			price						: 0,
			currency					: "gold",
			dirtyWidth					: 12,
			dirtyHeight					: 12,
			production					: 2
		},
		basic : {
			id							: 12,
			classString					: 'BasicIndustry',
			title						: "Basic Factory",
			label						: "Bas",
			width						: 2,
			height						: 2,
			price						: 500,
			currency					: "gold",
			dirtyWidth					: 10,
			dirtyHeight					: 10,
			production					: 3
		},
		massProduction : {
			id							: 13,
			classString					: 'MassProductionIndustry',
			title						: "Mass Prudction Factory",
			label						: "MP",
			width						: 2,
			height						: 2,
			price						: 7000,
			currency					: "gold",
			dirtyWidth					: 8,
			dirtyHeight					: 8,
			production					: 4
		},
		highTech : {
			id							: 14,
			classString					: 'HighTechIndustry',
			title						: "High-tech Factory",
			label						: "HT",
			width						: 2,
			height						: 2,
			price						: 20000,
			currency					: "gold",
			dirtyWidth					: 6,
			dirtyHeight					: 6,
			production					: 5
		},
		nanoTech : {
			id							: 15,
			classString					: 'NanoTechIndustry',
			title						: "Nano-tech Factory",
			label						: "Nano",
			width						: 2,
			height						: 2,
			price						: 50000,
			currency					: "gold",
			dirtyWidth					: 0,
			dirtyHeight					: 0,
			production					: 5
		}
	},
	commercial : {
		config : {
			bgDefaultColor				: 'rgba(45, 87, 255, 0.7)',
			outlineDefaultColor			: 'rgba(45, 87, 255, 1)'
		},
		suppliesStore : {
			id							: 16,
			classString					: 'SuppliesStore',
			title						: "Supplies Store",
			label						: "SS",
			width						: 2,
			height						: 2,
			price						: 100,
			currency					: "gold",
			singleton					: true
		},
		hardwareStore : {
			id							: 17,
			classString					: 'HardwareStore',
			title						: "Hardware Store",
			label						: "HW",
			width						: 2,
			height						: 2,
			price						: 2500,
			currency					: "gold",
			singleton					: true
		},
		farmersMarket : {
			id							: 18,
			classString					: 'FarmersMarket',
			title						: "Farmers Market",
			label						: "FM",
			width						: 2,
			height						: 2,
			price						: 5000,
			currency					: "gold",
			singleton					: true
		},
		furnitureStore : {
			id							: 19,
			classString					: 'FurnitureStore',
			title						: "Furniture Store",
			label						: "Furn",
			width						: 2,
			height						: 2,
			price						: 8000,
			currency					: "gold",
			singleton					: true
		},
		gardeningSupplies : {
			id							: 20,
			classString					: 'GardeningSupplies',
			title						: "Gardening Supplies",
			label						: "GS",
			width						: 2,
			height						: 2,
			price						: 13000,
			currency					: "gold",
			singleton					: true
		},
		donutShop : {
			id							: 21,
			classString					: 'DonutShop',
			title						: "Donut Shop",
			label						: "DS",
			width						: 2,
			height						: 2,
			price						: 17000,
			currency					: "gold",
			singleton					: true
		},
		fashionStore : {
			id							: 22,
			classString					: 'FashionStore',
			title						: "Fashion Store",
			label						: "FS",
			width						: 2,
			height						: 2,
			price						: 22000,
			currency					: "gold",
			singleton					: true
		},
		fastFoodRestaurant : {
			id							: 23,
			classString					: 'FastFoodRestaurant',
			title						: "Fast Food Restaurant",
			label						: "FFR",
			width						: 2,
			height						: 2,
			price						: 25000,
			currency					: "gold",
			singleton					: true
		},
		homeAppliances : {
			id							: 24,
			classString					: 'HomeAppliances',
			title						: "Home Appliances",
			label						: "HA",
			width						: 2,
			height						: 2,
			price						: 30000,
			currency					: "gold",
			singleton					: true
		}
	},
	power : {
		config : {
			bgDefaultColor				: 'rgba(234, 252, 57, 0.7)',
			outlineDefaultColor			: 'rgba(234, 252, 57, 1)',
			bgDefaultDirtyColor			: 'rgba(152, 81, 10, 0.3)',
			outlineDefaultDirtyColor	: 'rgba(219, 117, 15, 1)'
		},
		wind : {
			id							: 25,
			classString					: 'WindPower',
			title						: "Wind Power Plant",
			label						: "w",
			width						: 1,
			height						: 1,
			price						: 6000,
			currency					: "gold",
			dirtyWidth					: 0,
			dirtyHeight					: 0,
			capacity					: 6
		},
		coal : {
			id							: 26,
			classString					: 'CoalPower',
			title						: "Coal Power Plant",
			label						: "CO",
			width						: 2,
			height						: 2,
			price						: 4500,
			currency					: "gold",
			dirtyWidth					: 10,
			dirtyHeight					: 10,
			capacity					: 12
		},
		deluxeWind : {
			id							: 27,
			classString					: 'DeluxeWindPower',
			title						: "Deluxe Wind Power Plant",
			label						: "DW",
			width						: 2,
			height						: 2,
			price						: 15000,
			currency					: "gold",
			dirtyWidth					: 0,
			dirtyHeight					: 0,
			capacity					: 22
		},
		solar : {
			id							: 28,
			classString					: 'SolarPower',
			title						: "Solar Power Plant",
			label						: "Sol",
			width						: 2,
			height						: 4,
			price						: 22000,
			currency					: "gold",
			dirtyWidth					: 0,
			dirtyHeight					: 0,
			capacity					: 35
		},
		oil : {
			id							: 29,
			classString					: 'OilPower',
			title						: "Oil Power Plant",
			label						: "Oil",
			width						: 2,
			height						: 4,
			price						: 15000,
			currency					: "gold",
			dirtyWidth					: 8,
			dirtyHeight					: 8,
			capacity					: 40
		},
		nuclear : {
			id							: 30,
			classString					: 'NuclearPower',
			title						: "Nuclear Power Plant",
			label						: "Nuc",
			width						: 3,
			height						: 4,
			price						: 35000,
			currency					: "gold",
			dirtyWidth					: 12,
			dirtyHeight					: 12,
			capacity					: 60
		},
		fusion : {
			id							: 31,
			classString					: 'FusionPower',
			title						: "Fusion Power Plant",
			label						: "Fus",
			width						: 3,
			height						: 3,
			price						: 90000,
			currency					: "gold",
			dirtyWidth					: 0,
			dirtyHeight					: 0,
			capacity					: 75
		}
	},
	water : {
		config : {
			bgDefaultColor				: 'rgba(0, 170, 220, 0.7)',
			outlineDefaultColor			: 'rgba(0, 170, 220, 1)'
		},
		waterTower : {
			id							: 32,
			classString					: 'WaterTower',
			title						: "Basic Water Tower",
			label						: "WT",
			width						: 1,
			height						: 1,
			price						: 6000,
			currency					: "gold",
			capacity					: 9
		},
		waterPumpingStation : {
			id							: 33,
			classString					: 'WaterPumpingStation',
			title						: "Water Pumping Station",
			label						: "WPS",
			width						: 2,
			height						: 3,
			price						: 45000,
			currency					: "gold",
			capacity					: 55
		}
	},
	sewage : {
		config : {
			bgDefaultColor				: 'rgba(135, 126, 27, 0.7)',
			outlineDefaultColor			: 'rgba(135, 126, 27, 1)',
			bgDefaultDirtyColor			: 'rgba(152, 81, 10, 0.3)',
			outlineDefaultDirtyColor	: 'rgba(219, 117, 15, 1)'
		},
		small : {
			id							: 34,
			classString					: 'SmallSewage',
			title						: "Small Sewage Outflow Pipe",
			label						: "Sm",
			width						: 1,
			height						: 1,
			price						: 4000,
			currency					: "gold",
			dirtyWidth					: 10,
			dirtyHeight					: 10,
			capacity					: 7
		},
		basic : {
			id							: 35,
			classString					: 'BasicSewage',
			title						: "Basic Sewage Outflow Pipe",
			label						: "Bas",
			width						: 2,
			height						: 2,
			price						: 12000,
			currency					: "gold",
			dirtyWidth					: 12,
			dirtyHeight					: 12,
			capacity					: 28
		},
		deluxe : {
			id							: 36,
			classString					: 'DeluxeSewage',
			title						: "Deluxe Sewage Treatment Plant",
			label						: "Dlx",
			width						: 2,
			height						: 3,
			price						: 35000,
			currency					: "gold",
			dirtyWidth					: 0,
			dirtyHeight					: 0,
			capacity					: 55
		}
	},
	wasteManagement : {
		config : {
			bgDefaultColor				: 'rgba(135, 27, 90, 0.7)',
			outlineDefaultColor			: 'rgba(135, 27, 90, 1)',
			bgDefaultDirtyColor			: 'rgba(152, 81, 10, 0.3)',
			outlineDefaultDirtyColor	: 'rgba(219, 117, 15, 1)'
		},
		smallGarbageDump : {
			id							: 37,
			classString					: 'SmallGarbageDump',
			title						: "Small Garbage Dump",
			label						: "SGD",
			width						: 2,
			height						: 2,
			price						: 6000,
			currency					: "gold",
			dirtyWidth					: 10,
			dirtyHeight					: 10,
			capacity					: 15
		},
		garbageDump : {
			id							: 38,
			classString					: 'GarbageDump',
			title						: "Garbage Dump",
			label						: "GD",
			width						: 2,
			height						: 3,
			price						: 12000,
			currency					: "gold",
			dirtyWidth					: 12,
			dirtyHeight					: 12,
			capacity					: 31
		},
		garbageIncinerator : {
			id							: 39,
			classString					: 'GarbageIncinerator',
			title						: "Garbage Incinerator",
			label						: "GI",
			width						: 2,
			height						: 2,
			price						: 15000,
			currency					: "gold",
			dirtyWidth					: 16,
			dirtyHeight					: 16,
			capacity					: 40
		},
		recyclingCenter : {
			id							: 40,
			classString					: 'RecyclingCenter',
			title						: "Recycling Center",
			label						: "RC",
			width						: 3,
			height						: 2,
			price						: 60000,
			currency					: "gold",
			dirtyWidth					: 0,
			dirtyHeight					: 0,
			capacity					: 70
		}
	},
	fire : {
		config : {
			bgDefaultColor				: 'rgba(255, 0, 0, 0.7)',
			outlineDefaultColor			: 'rgba(255, 0, 0, 1)',
			bgDefaultCoverageColor		: 'rgba(255, 97, 97, 0.3)',
			outlineDefaultCoverageColor	: 'rgba(255, 97, 97, 1)'
		},
		small : {
			id							: 41,
			classString					: 'SmallFireStation',
			title						: "Small Fire Station",
			label						: "Sm",
			width						: 1,
			height						: 1,
			price						: 6100,
			currency					: "gold",
			coverageWidth				: 6,
			coverageHeight				: 8
		},
		basic : {
			id							: 42,
			classString					: 'BasicFireStation',
			title						: "Basic Fire Station",
			label						: "Bas",
			width						: 2,
			height						: 2,
			price						: 11000,
			currency					: "gold",
			coverageWidth				: 10,
			coverageHeight				: 12
		},
		deluxe : {
			id							: 43,
			classString					: 'DeluxeFireStation',
			title						: "Deluxe Fire Station",
			label						: "Dlx",
			width						: 4,
			height						: 2,
			price						: 42100,
			currency					: "gold",
			coverageWidth				: 22,
			coverageHeight				: 22
		}
	},
	police : {
		config : {
			bgDefaultColor				: 'rgba(97, 252, 255, 0.7)',
			outlineDefaultColor			: 'rgba(97, 252, 255, 1)',
			bgDefaultCoverageColor		: 'rgba(100, 190, 255, 0.3)',
			outlineDefaultCoverageColor	: 'rgba(100, 190, 255, 1)'
		},
		small : {
			id							: 44,
			classString					: 'SmallPoliceStation',
			title						: "Small Police Station",
			label						: "Sm",
			width						: 1,
			height						: 1,
			price						: 10100,
			currency					: "gold",
			coverageWidth				: 6,
			coverageHeight				: 8
		},
		basic : {
			id							: 45,
			classString					: 'BasicPoliceStation',
			title						: "Basic Police Station",
			label						: "Bas",
			width						: 2,
			height						: 2,
			price						: 18800,
			currency					: "gold",
			coverageWidth				: 12,
			coverageHeight				: 12
		},
		precinct : {
			id							: 46,
			classString					: 'PolicePrecinct',
			title						: "Police Precinct",
			label						: "pct",
			width						: 4,
			height						: 2,
			price						: 72100,
			currency					: "gold",
			coverageWidth				: 24,
			coverageHeight				: 24
		}
	},
	health : {
		config : {
			bgDefaultColor				: 'rgba(255, 130, 200, 0.7)',
			outlineDefaultColor			: 'rgba(255, 130, 200, 1)',
			bgDefaultCoverageColor		: 'rgba(255, 190, 230, 0.3)',
			outlineDefaultCoverageColor	: 'rgba(255, 190, 230, 1)'
		},
		smallHealthClinic : {
			id							: 47,
			classString					: 'SmallHealthClinic',
			title						: "Small Health Clinic",
			label						: "Sm",
			width						: 1,
			height						: 1,
			price						: 12300,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 8
		},
		healthClinic : {
			id							: 48,
			classString					: 'HealthClinic',
			title						: "Health Clinic",
			label						: "HC",
			width						: 2,
			height						: 2,
			price						: 23200,
			currency					: "gold",
			coverageWidth				: 12,
			coverageHeight				: 12
		},
		hospital : {
			id							: 49,
			classString					: 'Hospital',
			title						: "Hospital",
			label						: "Hos",
			width						: 4,
			height						: 2,
			price						: 64200,
			currency					: "gold",
			coverageWidth				: 24,
			coverageHeight				: 24
		}
	},
	government : {
		config : {
			bgDefaultColor				: 'rgba(150, 150, 150, 0.7)',
			outlineDefaultColor			: 'rgba(150, 150, 150, 1)'
		},
		townHall : {
			id							: 50,
			classString					: 'TownHall',
			title						: "Town Hall",
			label						: "TH",
			width						: 3,
			height						: 2,
			price						: 100,
			currency					: "gold",
			singleton					: true
		},
		cityStorage : {
			id							: 51,
			classString					: 'CityStorage',
			title						: "City Storage",
			label						: "CS",
			width						: 3,
			height						: 2,
			price						: 0,
			currency					: "gold",
			singleton					: true
		},
		cityHall : {
			id							: 52,
			classString					: 'CityHall',
			title						: "City Hall",
			label						: "CH",
			width						: 3,
			height						: 2,
			price						: 100,
			currency					: "gold",
			singleton					: true
		},
		mayorsMansion : {
			id							: 53,
			classString					: 'MayorsMansion',
			title						: "Mayors Mansion",
			label						: "MM",
			width						: 3,
			height						: 3,
			price						: 100,
			currency					: "gold",
			singleton					: true
		},
		epicProjects : {
			id							: 54,
			classString					: 'EpicProjects',
			title						: "Department of Epic Projects",
			label						: "EP",
			width						: 2,
			height						: 2,
			price						: 0,
			currency					: "gold",
			singleton					: true
		}
	},
	parks : {
		config : {
			bgDefaultColor				: 'rgba(0, 140, 115, 0.7)',
			outlineDefaultColor			: 'rgba(0, 140, 115, 1)',
			bgDefaultCoverageColor		: 'rgba(0, 200, 165, 0.3)',
			outlineDefaultCoverageColor	: 'rgba(0, 200, 165, 1)'
		},
		smallFountainPark : {
			id							: 61,
			classString					: 'SmallFountainPark',
			title						: "Small Fountain Park",
			label						: "SFP",
			width						: 1,
			height						: 1,
			price						: 4000,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.05
		},
		modernArtPark : {
			id							: 62,
			classString					: 'ModernArtPark',
			title						: "Modern Art Park",
			label						: "MAP",
			width						: 1,
			height						: 1,
			price						: 5000,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 6,
			populationBoost				: 0.10
		},
		plumbobPark : {
			id							: 63,
			classString					: 'PlumbobPark',
			title						: "Plumbob Park",
			label						: "PlP",
			width						: 1,
			height						: 1,
			price						: 140,
			currency					: "cash",
			coverageWidth				: 6,
			coverageHeight				: 8,
			populationBoost				: 0.20
		},
		reflectingPoolPark : {
			id							: 64,
			classString					: 'ReflectingPoolPark',
			title						: "Reflecting Pool Park",
			label						: "RPP",
			width						: 1,
			height						: 2,
			price						: 6000,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 6,
			populationBoost				: 0.20
		},
		llarryTheLlama : {
			id							: 65,
			classString					: 'LlarryTheLlama',
			title						: "Llarry the Llama",
			label						: "Lll",
			width						: 2,
			height						: 2,
			price						: 280,
			currency					: "cash",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.25
		},
		peacefulPark : {
			id							: 66,
			classString					: 'PeacefulPark',
			title						: "Peaceful Park",
			label						: "PP",
			width						: 1,
			height						: 2,
			price						: 8000,
			currency					: "gold",
			coverageWidth				: 6,
			coverageHeight				: 10,
			populationBoost				: 0.25
		},
		urbanPlaza : {
			id							: 67,
			classString					: 'UrbanPlaza',
			title						: "Urban Plaza",
			label						: "UP",
			width						: 1,
			height						: 2,
			price						: 12000,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 6,
			populationBoost				: 0.20
		},
		ballOfTwine : {
			id							: 68,
			classString					: 'BallOfTwine',
			title						: "World's Largest Ball of Twine",
			label						: "BoT",
			width						: 2,
			height						: 2,
			price						: 300,
			currency					: "cash",
			coverageWidth				: 6,
			coverageHeight				: 8,
			populationBoost				: 0.30
		},
		sculptureGarden : {
			id							: 69,
			classString					: 'SculptureGarden',
			title						: "Sculpture Garden",
			label						: "SG",
			width						: 1,
			height						: 2,
			price						: 16000,
			currency					: "gold",
			coverageWidth				: 6,
			coverageHeight				: 8,
			populationBoost				: 0.30
		},
		rowOfTrees : {
			id							: 70,
			classString					: 'RowOfTrees',
			title						: "Row of Trees",
			label						: "RoT",
			width						: 2,
			height						: 1,
			price						: 20000,
			currency					: "gold",
			coverageWidth				: 12,
			coverageHeight				: 4,
			populationBoost				: 0.30
		},
		anchorPark : {
			id							: 71,
			classString					: 'AnchorPark',
			title						: "Anchor Park",
			label						: "AP",
			width						: 2,
			height						: 2,
			price						: 500,
			currency					: "cash",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.30
		},
		soccerField : {
			id							: 72,
			classString					: 'SoccerField',
			title						: "Soccer Field",
			label						: "SF",
			width						: 2,
			height						: 2,
			price						: 24000,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.25
		},
		joggingPath : {
			id							: 73,
			classString					: 'JoggingPath',
			title						: "Jogging Path",
			label						: "JP",
			width						: 2,
			height						: 2,
			price						: 28000,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.30
		},
		waterParkPlayground : {
			id							: 74,
			classString					: 'WaterParkPlayground',
			title						: "Water Park Playground",
			label						: "WPP",
			width						: 2,
			height						: 2,
			price						: 400,
			currency					: "cash",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.25
		},
		giantGardenGnome : {
			id							: 75,
			classString					: 'GiantGardenGnome',
			title						: "Giant Garden Gnome",
			label						: "GGG",
			width						: 2,
			height						: 2,
			price						: 500,
			currency					: "cash",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.30
		},
		basketballCourt : {
			id							: 76,
			classString					: 'BasketballCourt',
			title						: "Basketball Court",
			label						: "BC",
			width						: 2,
			height						: 1,
			price						: 600,
			currency					: "cash",
			coverageWidth				: 10,
			coverageHeight				: 6,
			populationBoost				: 0.30
		},
		dolly : {
			id							: 77,
			classString					: 'Dolly',
			title						: "Dolly The Dinosaur",
			label						: "Dly",
			width						: 3,
			height						: 2,
			price						: 700,
			currency					: "cash",
			coverageWidth				: 10,
			coverageHeight				: 8,
			populationBoost				: 0.30
		},
		tokyoTownGate : {
			id							: 78,
			classString					: 'TokyoTownGate',
			title						: "Tokyo Town Gate",
			label						: "TTG",
			width						: 2,
			height						: 2,
			price						: 38000,
			currency					: "gold",
			coverageWidth				: 10,
			coverageHeight				: 10,
			populationBoost				: 0.25
		},
		skatePark : {
			id							: 79,
			classString					: 'SkatePark',
			title						: "Skate Park",
			label						: "SkP",
			width						: 1,
			height						: 2,
			price						: 800,
			currency					: "cash",
			coverageWidth				: 6,
			coverageHeight				: 12,
			populationBoost				: 0.40
		},
		sakuraPark : {
			id							: 80,
			classString					: 'SakuraPark',
			title						: "Sakura Park",
			label						: "SkP",
			width						: 1,
			height						: 1,
			price						: 60000,
			currency					: "gold",
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.20
		}
	},
	education : {
		config : {
			bgDefaultColor				: 'rgba(130, 0, 255, 0.7)',
			outlineDefaultColor			: 'rgba(130, 0, 255, 1)',
			bgDefaultCoverageColor		: 'rgba(180, 100, 255, 0.3)',
			outlineDefaultCoverageColor	: 'rgba(180, 100, 255, 1)'
		},
		departmentOfEducation : {
			id							: 55,
			classString					: 'DepartmentOfEducation',
			title						: "Department Of Education",
			label						: "DoE",
			width						: 2,
			height						: 3,
			price						: 40000,
			currency					: "gold",
			singleton					: true,
			coverageWidth				: 8,
			coverageHeight				: 8,
			populationBoost				: 0.25
		},
		gradeSchool : {
			id							: 56,
			classString					: 'GradeSchool',
			title						: "Grade School",
			label						: "GS",
			width						: 2,
			height						: 3,
			price						: 3,
			currency					: "key",
			coverageWidth				: 10,
			coverageHeight				: 8,
			populationBoost				: 0.25
		},
		publicLibrary : {
			id							: 57,
			classString					: 'PublicLibrary',
			title						: "Public Library",
			label						: "PL",
			width						: 2,
			height						: 2,
			price						: 5,
			currency					: "key",
			coverageWidth				: 12,
			coverageHeight				: 8,
			populationBoost				: 0.25
		},
		highSchool : {
			id							: 58,
			classString					: 'HighSchool',
			title						: "High School",
			label						: "HS",
			width						: 2,
			height						: 4,
			price						: 7,
			currency					: "key",
			coverageWidth				: 14,
			coverageHeight				: 8,
			populationBoost				: 0.30
		},
		communityCollege : {
			id							: 59,
			classString					: 'CommunityCollege',
			title						: "Community College",
			label						: "CC",
			width						: 3,
			height						: 4,
			price						: 10,
			currency					: "key",
			coverageWidth				: 16,
			coverageHeight				: 16,
			populationBoost				: 0.40
		},
		university : {
			id							: 60,
			classString					: 'University',
			title						: "University",
			label						: "UNI",
			width						: 4,
			height						: 4,
			price						: 25,
			currency					: "key",
			coverageWidth				: 22,
			coverageHeight				: 22,
			populationBoost				: 0.50
		}
	},
	transportation : {
		
	},
	entertainment : {

	},
	gambling : {

	},
	landmarks : {

	},
	worship : {

	}
};
