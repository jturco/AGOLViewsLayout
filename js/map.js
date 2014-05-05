/**
 * @author Justin
 */
require(["dojo/ready", "esri/map", "dojo/dom", "dojo/_base/window"], function(ready, Map, dom, win) {
 	var sel = dom.byId("mapDiv");
 	var map;
 	
 	map = new Map(sel, {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "streets"
    });
  });
