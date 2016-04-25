// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'rhouser.pp9bl36p';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoicmhvdXNlciIsImEiOiJjaWtvM293a2MwdjBldHpqN2hsazV4bGo1In0.MEqDhiuXgitT2eGLIq6IWA';

// Create the map object with your mapId and token, 
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!
var geodata = 'data/parks.geojson'
var featureLayer = L.mapbox.featureLayer();
featureLayer.loadURL(geodata);
featureLayer.addTo(map);

featureLayer.on('ready', function() {
this.setStyle({
"color": "#6583BF",
"fillColor": "#6583BF",
"weight": .5,
"opacity": 0.65
})
map.fitbounds(featureLayer.getBounds());
})