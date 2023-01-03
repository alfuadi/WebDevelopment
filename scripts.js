var map = new maplibregl.Map({
container: 'map', // container id
style: 'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
center: [110,-7.215284387138757], // starting position [lng, lat]
zoom: 7.7 // starting zoom
});

map.on('load', function() {
	map.addSource("contours", {
    type: "vector",
    url: "https://tiles.circlegeo.com/data/indocg.json",
});
       

map.on('load', function() {
    map.addSource("aerial-source", {
        "type": "image",
        "url": "https://web.meteo.bmkg.go.id//media/data/bmkg/Nataru/JAWABALI/jawa/wrf/rrjawa_wrf3km_d2.png",
        "coordinates": [
            [105, -5],
            [115, -5],
            [115, -9.5],
            [105, -9.5]
        ]
    });
});

map.addLayer({
    "id": "overlay",
    "source": "aerial-source",
    "type": "raster",
    "paint": {
        "raster-opacity": 0.85
    }
});


// tunggu map nya di muat sempurna
map.addSource('ecmwf-1',{
	type: 'raster',
    scheme: "tms",
    tiles: [
    'https://signature.bmkg.go.id/api21/mpl_req/ecmwf/tp24/1000/2022112500/2022112700/{z}/{x}/{y}.png?ci=1&overlays=contourf'
    ]
})
map.addSource('ecmwf-2',{
	type: 'raster',
	scheme: "tms",
	tiles: [
    'https://signature.bmkg.go.id/api21/mpl_req/ecmwf/tp24/1000/2022112500/2022112800/{z}/{x}/{y}.png?ci=1&overlays=contourf'
    ]
})
map.addSource('ecmwf-3',{
	type: 'raster',
    scheme: "tms",
    tiles: [
    'https://signature.bmkg.go.id/api21/mpl_req/ecmwf/tp24/1000/2022112500/2022112900/{z}/{x}/{y}.png?ci=1&overlays=contourf'
    ]
})
map.addSource('ecmwf-4',{
	type: 'raster',
	scheme: "tms",
	tiles: [
    'https://signature.bmkg.go.id/api21/mpl_req/ecmwf/tp24/1000/2022112500/2022113000/{z}/{x}/{y}.png?ci=1&overlays=contourf'
    ]
})

map.addLayer({
	id: "ecmwf-1",
	type: "raster",
	source: "ecmwf-1",
	minzoom: 0,
	maxzoom: 22,
	layout: {
		visibility: 'none'
	},
	paint: {
		"raster-opacity": 1,
	},
})
    
map.addLayer({
	id: "ecmwf-2",
	type: "raster",
	source: "ecmwf-2",
	minzoom: 0,
	maxzoom: 22,
	layout: {
		visibility: 'none'
	},
	paint: {
		"raster-opacity": 1,
	},
})

map.addLayer({
	id: "ecmwf-3",
	type: "raster",
	source: "ecmwf-4",
	minzoom: 0,
	maxzoom: 22,
	layout: {
		visibility: 'none'
	},
	paint: {
		"raster-opacity": 1,
	},
})
    
map.addLayer({
	id: "ecmwf-4",
	type: "raster",
	source: "ecmwf-4",
	minzoom: 0,
	maxzoom: 22,
	layout: {
		visibility: 'none'
	},
	paint: {
		"raster-opacity": 1,
	},
})

map.addLayer({
	id: "indocg",
	type: "line",
	source: "contours",
	"source-layer": "indocg",
	layout: {
		"line-join": "round",
		"line-cap": "round",
	},
	paint: {
		"line-color": "#000",
		"line-width": 1,
	},
});
})
    
// event click
document.getElementById('before').addEventListener('click', (event) => {
map.setLayoutProperty('ecmwf-2', 'visibility', 'none')
map.setLayoutProperty('ecmwf-1', 'visibility', 'visible')
})
    
document.getElementById('next').addEventListener('click', (event) => {
map.setLayoutProperty('ecmwf-2', 'visibility', 'visible')
map.setLayoutProperty('ecmwf-1', 'visibility', 'none')
})

// //event-click-language
// document.getElementById('lang')
// 		.addEventListener('click', (event)=> {
// 			var language = event.target.id.substr('lang-'.length);
// 			map.setLayoutProperty('label_country', 'text-field', [
// 				'get',
// 				'name:' + language
// 				]);
// 		})

// var divItems = document.getElementsByClassName("language");
// function selected(item) {
//     this.clear();
//     item.style.backgroundColor = 'white';
// }

// function clear() {
//     for(var i=0; i < divItems.length; i++) {
//         var item = divItems[i];
//         item.style.backgroundColor = 'black';
//     }
// }

var colors = ['#a83a32','#b89b2a', '#339e1b', '#311fd1']
document.getElementById('checkki').addEventListener('change',(event)=> {
	colors.forEach((value,i) => {
		if (event.target.checked) {
			map.setLayoutProperty(
				'ki_layer'+i,
				'visibility',
				'visible'
			);
		} else {
			map.setLayoutProperty(
				'ki_layer'+i,
				'visibility',
				'none'
			);
	}
	})
})

document.getElementById('checkmslp').addEventListener('change',(event)=> {
	colors.forEach((value,i) => {
		if (event.target.checked) {
			map.setLayoutProperty(
				'mslp_layer'+i,
				'visibility',
				'visible'
			);
		} else {
			map.setLayoutProperty(
				'mslp_layer'+i,
				'visibility',
				'none'
			);
	}
	})
})

document.getElementById('checktp').addEventListener('change',(event)=> {
	colors.forEach((value,i) => {
		if (event.target.checked) {
			map.setLayoutProperty(
				'tp_layer'+i,
				'visibility',
				'visible'
			);
		} else {
			map.setLayoutProperty(
				'tp_layer'+i,
				'visibility',
				'none'
			);
	}
	})
})

document.getElementById('checkrh').addEventListener('change',(event)=> {
	colors.forEach((value,i) => {
		if (event.target.checked) {
			map.setLayoutProperty(
				'rh_layer'+i,
				'visibility',
				'visible'
			);
		} else {
			map.setLayoutProperty(
				'rh_layer'+i,
				'visibility',
				'none'
			);
	}
	})
})

var url1='http://backend-ibf1.herokuapp.com/ki'
fetch(url1).then(data=>data.json()).then(res=>{
	res.features.forEach((value,i)=>{
		map.addSource('ki'+i,{
			'type': 'geojson',
			'data':value
		})
		map.addLayer({
			'id': 'ki_layer'+i,
			'type': 'fill',
			'source': 'ki'+i,
			'layout': {
				'visibility':'none'
			},
			'paint': {
				'fill-color': '#eb6702',
				'fill-opacity': 0.5
				}
		})
	})
})

var url2='http://backend-ibf1.herokuapp.com/mslp'
fetch(url2).then(data=>data.json()).then(res=>{
	res.features.forEach((value,i)=>{
		map.addSource('mslp'+i,{
			'type': 'geojson',
			'data':value
		})
		map.addLayer({
			'id': 'mslp_layer'+i,
			'type': 'fill',
			'source': 'mslp'+i,
			'layout': {
				'visibility':'none'
			},
			'paint': {
				'fill-color': '#0636bd',
				'fill-opacity': 0.5
		}
		})
	})
})

var url2='http://backend-ibf1.herokuapp.com/tp'
fetch(url2).then(data=>data.json()).then(res=>{
	res.features.forEach((value,i)=>{
		map.addSource('tp'+i,{
			'type': 'geojson',
			'data':value
		})
		map.addLayer({
			'id': 'tp_layer'+i,
			'type': 'fill',
			'source': 'tp'+i,
			'layout': {
				'visibility':'none'
			},
			'paint': {
				'fill-color': '#bd068f',
				'fill-opacity': 0.5
		}
		})
	})
})

var url2='http://backend-ibf1.herokuapp.com/rh'
fetch(url2).then(data=>data.json()).then(res=>{
	res.features.forEach((value,i)=>{
		map.addSource('rh'+i,{
			'type': 'geojson',
			'data':value
		})
		map.addLayer({
			'id': 'rh_layer'+i,
			'type': 'fill',
			'source': 'rh'+i,
			'layout': {
				'visibility':'none'
			},
			'paint': {
				'fill-color': '#0c9613',
				'fill-opacity': 0.5
		}
		})
	})
})

