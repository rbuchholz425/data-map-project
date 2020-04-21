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

L.marker([35.08, -106.65]).addTo(map)
	.bindPopup("Welcome to Albuquerque!");

//GeoJSON code:

// function anotherLayer (feature, layer) {
// 	layer.bindPopup("<h1>Hello, I'm working!</h1>");
// 	layer.setIcon(marker);
// };
//
// L.geoJson(facebook, {
// 	onEachFeature: anotherLayer
// }).addTo(map);