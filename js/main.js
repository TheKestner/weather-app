//declaring ids 
let loc = document.getElementById('location');
let temperature = document.getElementById('temp');
let condition = document.getElementById('cond');
let image = document.getElementById('other');
let userInput = document.getElementById('zip');
let btn = document.getElementById('btn');
let zip = "";
const key = '6821542f34e67bbd5a6f5ebac8501730'; 

function getInput() {
  let numbers = userInput.value;
  zip = numbers;
}

// async / axios 
async function loadWeather() {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  setState(data);
  }

  

async function setState(data) {
    loc.innerText = data.name
    //console.log(loc);
    temperature.innerText = data.main.temp
    //console.log(temperature)
    condition.innerText = data.weather[0].description
    //console.log(condition)
    image = data.weather[0].icon // error uncaught properties of null
    //console.log(image)
    
    k = data.main.temp
    c.innerText = k - 273
    f.innerText = c.innerText * (9/5) + 32
    
  }

  


  btn.addEventListener("click",loadWeather);