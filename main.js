import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
 <div id="map"></div>
`

var map = L.map('map').setView([57.652954, 11.911073], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
var circle = L.circle([57.642954, 11.911073], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3,
  radius: 500
}).addTo(map);
var popup = L.popup();

var polygon = L.polygon([
  [57.664029, 11.873818],
  [57.654857, 11.871715],
  [57.660346, 11.888495]
]).addTo(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
console.log(map)

setupCounter(document.querySelector('#counter'))
