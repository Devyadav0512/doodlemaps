mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2eWFkYXZvbzciLCJhIjoiY2twYjQzaWRwMTBjajJ1cDduZjEyZmltcSJ9.BRN63DHomTAyz5JDfWVleg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([77.216721, 28.644800])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })
    map.addControl(new mapboxgl.NavigationControl());
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
    map.addControl(directions, 'top-left');
}