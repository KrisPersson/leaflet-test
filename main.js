import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
 <div id="map"></div>
`

var map = L.map('map').setView([51.505, -0.09], 13);
console.log(map)

setupCounter(document.querySelector('#counter'))
