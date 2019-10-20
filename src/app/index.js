import { Weather } from './Weather';
import { UI } from './UI';
import { LocalStorage } from './LocalStorage';

require('./index.css');


let localStorage = new LocalStorage();
let { city, countryCode} = localStorage.getLocationData();

let weather = new Weather(city, countryCode);
let ui = new UI();

async function fetchWeather(){
    let data = await weather.getWeather();
    ui.render(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);

document.getElementById('w-change-btn')
.addEventListener('click', (e)=>{
    e.preventDefault();
    let city = document.getElementById('city').value;
    let countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    localStorage.setLocationData(city, countryCode);
    fetchWeather();
});

