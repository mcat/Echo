                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                // vim: set ts=8 sts=8 sw=8 noet:
/*
 * Copyright (c) 2006-2011 Echo <solutions@aboutecho.com>. All rights reserved.
 * You may copy and modify this script as long as the above copyright notice,
 * this condition and the following disclaimer is left intact.
 * This software is provided by the author "AS IS" and no warranties are
 * implied, including fitness for a particular purpose. In no event shall
 * the author be liable for any damages arising in any way out of the use
 * of this software, even if advised of the possibility of such damage.
 * $Id: item-accumulator-display.js 33685 2011-06-10 06:53:17Z jskit $
 */


(function($) {

var plugin = Echo.createPlugin({
	"name": "ItemAccumulatorDisplay",
	"applications": ["Stream"],
	"init": function(plugin, application) {
		plugin.extendTemplate("Item", plugin.template,
			"insertBefore", "echo-item-modeSwitch");
		plugin.extendRenderer("Item", "accumulatorContainer",
			plugin.renderers.Item.accumulatorContainer);
		plugin.addCss(plugin.css);
		plugin.listenEvents(application);
	}
});

plugin.renderers = {"Item": {}};

plugin.template = '<div class="echo-item-accumulatorContainer"></div>';

plugin.renderers.Item.accumulatorContainer = function(element) {
	var item = this;
	var accName = plugin.config.get(item, "accumulator", "repliesCount");
	var accumulator = item.data.object.accumulators[accName];
	var count = plugin.get(item, "count") || {};
	if (typeof count.current == "undefined") {
		// first-time rendering actions
		var countTickTimeout = plugin.config.get(item, "countTickTimeout", 1);
		plugin.set(item, "countTickTimeout", countTickTimeout * 1000);
		plugin.set(item, "count", {
			"actual": accumulator,
			"current": accumulator
		});
		element.append(accumulator);
		return;
	}

	plugin.stopTimer(item);
	var container = item.dom.get("container");
	container.stop(true, true);
	if (count.actual != accumulator) {
		count.actual = accumulator;
		plugin.set(item, "count", count);
	}
	element.append(count.current);

	// animate counter if necessary
	if (count.current != count.actual) {
		var bgColor = plugin.get(item, "originalBGColor");
		if (typeof bgColor == "undefined") {
			bgColor = $.getVisibleColor(container);
			plugin.set(item, "originalBGColor", bgColor);
		}
		container.css({"backgroundColor": item.config.get("flashColor")});
		plugin.animateCounter(item, bgColor);
	}
};

plugin.listenEvents = function(application) {
	plugin.subscribe(application, "Stream.Item.onRender", function(topic, data) {
		var item = application.items[data.item.data.unique];
		if (!item || !item.dom) return;
		plugin.set(item, "originalBGColor", $.getVisibleColor(item.dom.get("container")));
	});
};

plugin.stopTimer = function(item) {
	var timer = plugin.get(item, "timer");
	if (timer) clearTimeout(timer);
	plugin.set(item, "timer", undefined);
};

plugin.animateCounter = function(item, bgColor) {
	plugin.stopTimer(item);
	var count = plugin.get(item, "count");
	if (typeof count.current != "undefined" && count.current == count.actual &&
			!plugin.get(item, "animationInProgress")) {
		// fading out
		var container = item.dom.get("container");
		plugin.set(item, "animationInProgress", true);
		container.animate(
			{"backgroundColor": bgColor},
			item.config.get("fadeTimeout"),
			"linear",
			function() {
				container.css("backgroundColor", "");
				plugin.set(item, "animationInProgress", false);
			}
		);
		return;
	}
	plugin.set(item, "timer", setTimeout(function() {
		var count = plugin.get(item, "count");
		if (count.current != count.actual) {
			count.current < count.actual ? count.current++ : count.current--;
			plugin.set(item, "count.current", count.current);
			item.dom.get("accumulatorContainer").html(count.current);
			plugin.animateCounter(item, bgColor);
		}
	}, plugin.get(item, "countTickTimeout")));
};

plugin.css = '.echo-item-accumulatorContainer { float: right; margin-right: 7px; }';

})(jQuery);


