//store GeoJSON data URL
// const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
// const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

// Add a Leaflet tile layer.
let streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create a Leaflet map object.
var myMap = L.map("map", {
    center: [-2.5, 117.5], // set center coordinates around Indonesia
    zoom: 4,
    layers: [streets]
});

//define basemaps as the streetmap
let baseMaps = {
    "streets": streets
};

//set earthquake layergroup and tectonic plate layergroups
let earthquake_data = new L.LayerGroup();
let tectonics = new L.LayerGroup();

//set the overlays and link the layergroups to separate overlays
let overlays = {
    "Earthquakes": earthquake_data,
    "Tectonic Plates": tectonics
};

//add a control layer and pass in baseMaps and overlays
L.control.layers(baseMaps, overlays).addTo(myMap);

//set colour function to return colour choise based on the depth of the earthquake
//earthquakes with greater depth should appear darker in colour.
function styleInfo(feature) {
    return {
        opacity: 1, 
        fillOpacity: 1,      
        color: chooseColor(feature.geometry.coordinates[2]),
        radius: chooseRadius(feature.properties.mag), //sets radius based on magnitude 
        fillColor: chooseColor(feature.geometry.coordinates[2]) //sets fillColor based on the depth of the earthquake
    }
};

function chooseColor(depth) {
    if (depth <= 10) return "pink";
    else if (depth > 10 & depth <= 25) return "orange";
    else if (depth > 25 & depth <= 40) return "green";
    else if (depth > 40 & depth <= 55) return "blue";
    else if (depth > 55 & depth <= 70) return "red";
    else return "black";
};

//define a function to determine the radius of each earthquake marker
function chooseRadius(magnitude) {
    return magnitude*5;
};

// pull the earthquake JSON data with d3
// add the earthquake data to the earthquake_data layergroup / overlay
d3.json(url).then(function (data) { 
    L.geoJson(data, {
        pointToLayer: function (feature, latlon) {  
            return L.circleMarker(latlon).bindPopup(feature.id); 
        },
        style: styleInfo
        
    }).addTo(earthquake_data); 
    earthquake_data.addTo(myMap);
   
});

// create Leaflet Legend
// https://codepen.io/haakseth/pen/KQbjdO 
var legend = L.control({ position: "bottomright" });
legend.onAdd = function(myMap) {
    var div = L.DomUtil.create("div", "legend");
       div.innerHTML += "<h4>Depth Color Legend</h4>";
       div.innerHTML += '<i style="background: pink"></i><span>(Depth < 10)</span><br>';
       div.innerHTML += '<i style="background: orange"></i><span>(10 < Depth <= 25)</span><br>';
       div.innerHTML += '<i style="background: green"></i><span>(25 < Depth <= 40)</span><br>';
       div.innerHTML += '<i style="background: blue"></i><span>(40 < Depth <= 55)</span><br>';
       div.innerHTML += '<i style="background: red"></i><span>(55 < Depth <= 70)</span><br>';
       div.innerHTML += '<i style="background: black"></i><span>(Depth > 70)</span><br>';
  
    return div;
  };
  //add the legend to Leaflet map
  legend.addTo(myMap);

