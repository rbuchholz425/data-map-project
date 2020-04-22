//Leaflet map code is shown below:


let map = L.map('map').setView([35.08, -106.65], 11);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=JEpA1SZ9bmeYReFjx7Bg', {
	tileSize: 512,
	zoomOffset: -1,
	minZoom: 3,
	noWrap: true,
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;' +
		' MapTiler</a> <a href="https://www.openstreetmap.org/copyright"' +
		' target="_blank">&copy; OpenStreetMap contributors</a>',
	crossOrigin: true
}).addTo(map);

// Icon set up for the facebook user data
let fbIcon = L.icon({
	iconUrl: 'img/facebook.svg',
	iconSize:     [32, 37], // size of the icon
	iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

let fbIcon2 = L.icon({
	iconUrl: 'img/facebook2.svg',
	iconSize:     [32, 37], // size of the icon
	iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

let popup = L.popup();

L.marker([35.08, -106.65], {icon:fbIcon}).addTo(map)
	.bindPopup("Facebook User ABQ");

//GeoJSON Sample code:

let geojson = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.71295166015625,35.24449753934067]}},
		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.62506103515625,35.13900214724948]}},
		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.49322509765624,35.185032937998294]}},
		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.62643432617186,35.108674964507586]}},
		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.80084228515625,35.146862906756304]}},
		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.6168212890625,35.05698043137265]}},
		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.57562255859375,35.40136418330354]}}]};

//Formatting the geojson code below:
//Styles each point marked.
let sampleGeoJson = L.geoJSON(geojson, {
	style :function(feature) {
		return {

		}
	},
	//Adds the fb icon as the marker for each point.
	pointToLayer: function(geoJsonPoint, latlng) {
		return L.marker(latlng, {
				icon: fbIcon
			}).on('mousemove', function(e) {
				e.target.setIcon(fbIcon2);
		}).on('mouseout', function(e) {
			e.target.setIcon(fbIcon);
		});
	},
	//Adds popups for each of the points.
	onEachFeature: function(feature, layer) {
		if(feature.geometry.type==='Point') {
			layer.bindPopup(feature.geometry.coordinates.join(','));
		}
	}
}).addTo(map);

let featureGroup = L.featureGroup({geojson}).addTo(map);

//Bounds for the map to pull up with the data centered on it.
map.fitBounds(featureGroup.getBounds(), {
	padding: [100,100]
});