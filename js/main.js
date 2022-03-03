//declaring ids 
let location = document.getElementById('location');
let temperature = document.getElementById('temp');
let condition = document.getElementById('cond');
let image = document.getElementById('other');

const key = '6821542f34e67bbd5a6f5ebac8501730'; //'api.openweathermap.org/data/2.5/weather?zip=${zip}us&appid=${api}'


async function loadWeather() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=${key}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    setState(data);
    } 


    



    async function setState(data) {
        loc.innerText = data.name
        console.log(loc);
        temperature.innerText = data.main.temp
        console.log(temperature)
        condition.innerText = data.weather[0].description
        console.log(condition)
        let image = data.weather[0].icon // error uncaught properties of null
        console.log(image)
        
         
        //let values = await Promise.all([loc, temperature, condition, image])
    
        
      }