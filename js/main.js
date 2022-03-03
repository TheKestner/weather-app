//declaring ids 
let location = document.getElementById('location');
let temperature = document.getElementById('temp');
let condition = document.getElementById('cond');
let image = document.getElementById('other');

const key = '6821542f34e67bbd5a6f5ebac8501730'; //'api.openweathermap.org/data/2.5/weather?zip=${zip}us&appid=${api}'


async function loadWeather() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=${key}`);
    console.log(response);
    let data = response.json();
    console.log(data);
    }
  
    loadWeather();

    
