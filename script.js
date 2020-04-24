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
	if(map.hasLayer(allButton)){
		map.removeLayer(allButton);
	} else {
		map.removeLayer(todoButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(allButton);
	}
});

//toggles art industry layer
$('#toggleArtLayer').click(function(){
	if(map.hasLayer(artButton)){
		map.removeLayer(artButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(todoButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(artButton);
	}
});

//toggles bar industry layer
$('#toggleBarLayer').click(function(){
	if(map.hasLayer(barButton)){
		map.removeLayer(barButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(todoButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(barButton);
	}
});

//toggles automotive industry layer
$('#toggleCarLayer').click(function(){
	if(map.hasLayer(carButton)){
		map.removeLayer(carButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(todoButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(carButton);
	}
});

//toggles personal care industry layer
$('#toggleCareLayer').click(function(){
	if(map.hasLayer(careButton)){
		map.removeLayer(careButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(todoButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(careButton);
	}
});

//toggles religious sites industry layer
$('#toggleChurchLayer').click(function(){
	if(map.hasLayer(churchButton)){
		map.removeLayer(churchButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(todoButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(churchButton);
	}
});

//toggles food/restaurants industry layer
$('#toggleFoodLayer').click(function(){
	if(map.hasLayer(foodButton)){
		map.removeLayer(foodButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(todoButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(foodButton);
	}
});

//toggles government industry layer
$('#toggleGovLayer').click(function(){
	if(map.hasLayer(govButton)){
		map.removeLayer(govButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(todoButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(govButton);
	}
});

//toggles health/medical industry layer
$('#toggleHealthLayer').click(function(){
	if(map.hasLayer(healthButton)){
		map.removeLayer(healthButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(todoButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(healthButton);
	}
});

//toggles hotel industry layer
$('#toggleHotelLayer').click(function(){
	if(map.hasLayer(hotelButton)){
		map.removeLayer(hotelButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(todoButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(hotelButton);
	}
});

//toggles local industry layer
$('#toggleLocalLayer').click(function(){
	if(map.hasLayer(localButton)){
		map.removeLayer(localButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(todoButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(localButton);
	}
});

//toggles organizations industry layer
$('#toggleOrgLayer').click(function(){
	if(map.hasLayer(orgButton)){
		map.removeLayer(orgButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(todoButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(orgButton);
	}
});

//toggles education industry layer
$('#toggleSchoolLayer').click(function(){
	if(map.hasLayer(schoolButton)){
		map.removeLayer(schoolButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(sportButton);
		map.removeLayer(shopButton);
		map.removeLayer(todoButton);
		map.removeLayer(twentyButton);
		map.addLayer(schoolButton);
	}
});

//toggles shopping industry layer
$('#toggleShopLayer').click(function(){
	if(map.hasLayer(shopButton)){
		map.removeLayer(shopButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(todoButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(shopButton);
	}
});

//toggles sports/outdoors industry layer
$('#toggleSportLayer').click(function(){
	if(map.hasLayer(sportButton)){
		map.removeLayer(sportButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(todoButton);
		map.removeLayer(twentyButton);
		map.addLayer(sportButton);
	}
});

//toggles places of interest industry layer
$('#toggleTodoLayer').click(function(){
	if(map.hasLayer(todoButton)){
		map.removeLayer(todoButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.removeLayer(twentyButton);
		map.addLayer(todoButton);
	}
});

//toggles places of interest industry layer
$('#toggleTwentyLayer').click(function(){
	if(map.hasLayer(twentyButton)){
		map.removeLayer(twentyButton);
	} else {
		map.removeLayer(allButton);
		map.removeLayer(artButton);
		map.removeLayer(barButton);
		map.removeLayer(carButton);
		map.removeLayer(careButton);
		map.removeLayer(churchButton);
		map.removeLayer(foodButton);
		map.removeLayer(govButton);
		map.removeLayer(healthButton);
		map.removeLayer(hotelButton);
		map.removeLayer(localButton);
		map.removeLayer(orgButton);
		map.removeLayer(schoolButton);
		map.removeLayer(shopButton);
		map.removeLayer(sportButton);
		map.addLayer(twentyButton);
	}
});


