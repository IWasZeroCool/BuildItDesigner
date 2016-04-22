
function ToolTip() {
	this.lastMapObj = null;
	this.ttObj = null;
}

ToolTip.prototype.show = function(x, y, mapObj) {
	if (!UIState.showToolTipsOnMap) { return; }
	if (mapObj === this.lastMapObj) {
		this.move(x, y);
		return;
	}
	this.lastMapObj = mapObj;
	this.setupToolTip(mapObj);
	this.move(x,y);
};

ToolTip.prototype.move = function(x, y) {
	$(this.ttObj).offset({ top: y + DesignerConfig.map.mapPadding + 70, left: x + 15});
};

ToolTip.prototype.hide = function() {
	this.lastMapObj = null;
	$(this.ttObj).remove();
};

ToolTip.prototype.setupToolTip = function(mapObj) {
	this.ttObj = this.getToolTipContent(null, mapObj);
	$(this.ttObj).css("position", "absolute");
	$(this.ttObj).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content");
	$(document.body).append(this.ttObj);
};

ToolTip.prototype.getToolTipContent = function(buttonId, mapObj) {
	if (!buttonToClass[buttonId] && mapObj === undefined) { return; }
	var itemObj = mapObj ? mapObj : new buttonToClass[buttonId]();
	var ttObj = $('#toolTip').clone();
	ttObj.removeAttr('id');
	ttObj.removeAttr('style');
	$(ttObj).find('#toolTipTitle').prop('innerHTML', itemObj.title);
	if (mapObj) {
		$(ttObj).find('#toolTipPosition').prop('innerHTML', "Position: "+itemObj.x+" , "+itemObj.y);
	} else {
		$(ttObj).find('#toolTipPosition').remove();
	}
	$(ttObj).find('#toolTipSize').prop('innerHTML', "Size: "+itemObj.width+" x "+itemObj.height);
	if (itemObj.price !== undefined && itemObj.currency !== undefined) {
		$(ttObj).find('#toolTipPrice').prop('innerHTML', "Cost: "+itemObj.price+" "+itemObj.currency + (itemObj.currency == "key" ? "s" : ""));
	} else {
		$(ttObj).find('#toolTipPrice').remove();
	}
	if (itemObj.dirtyWidth !== undefined) {
		$(ttObj).find('#toolTipDirtyArea').prop('innerHTML', "Dirty Area: "+itemObj.dirtyWidth+" x "+itemObj.dirtyHeight);
	} else {
		$(ttObj).find('#toolTipDirtyArea').remove();
	}
	if (itemObj.coverageWidth !== undefined) {
		$(ttObj).find('#toolTipEffectArea').prop('innerHTML', "Effect Area: "+itemObj.coverageWidth+" x "+itemObj.coverageHeight);
	} else {
		$(ttObj).find('#toolTipEffectArea').remove();
	}
	if (itemObj.capacity !== undefined) {
		$(ttObj).find('#toolTipCapacity').prop('innerHTML', "Capactiy: "+itemObj.capacity);
	} else {
		$(ttObj).find('#toolTipCapacity').remove();
	}
	if (itemObj.maxPopulation !== undefined) {
		$(ttObj).find('#toolTipMaxPopulation').prop('innerHTML', "Max Population: "+itemObj.maxPopulation);
	} else {
		$(ttObj).find('#toolTipMaxPopulation').remove();
	}
	if (itemObj.populationBoost !== undefined) {
		$(ttObj).find('#toolTipSizePopulationBoost').prop('innerHTML', "Population Boost: "+itemObj.populationBoost+" %");
	} else {
		$(ttObj).find('#toolTipSizePopulationBoost').remove();
	}
	if (itemObj.production !== undefined) {
		$(ttObj).find('#toolTipSizeProduction').prop('innerHTML', "Production: "+itemObj.production);
	} else {
		$(ttObj).find('#toolTipSizeProduction').remove();
	}
	if (itemObj.singleton === undefined || !itemObj.singleton) {
		$(ttObj).find('#toolTipSizeUnique').remove();
	}
	return mapObj ? ttObj : ttObj.prop('outerHTML');
};