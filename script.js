

//GeoJSON Sample code for initial experimentation:

// let geojson = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.71295166015625,35.24449753934067]}},
// 		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.62506103515625,35.13900214724948]}},
// 		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.49322509765624,35.185032937998294]}},
// 		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.62643432617186,35.108674964507586]}},
// 		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.80084228515625,35.146862906756304]}},
// 		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.6168212890625,35.05698043137265]}},
// 		{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-106.57562255859375,35.40136418330354]}}]};

//JS for working button to toggle on and off the markers data
$('#toggleLayer').click(function(){
	if(map.hasLayer(face)){
		map.removeLayer(face);
	} else {
		map.addLayer(face);
	}
});

