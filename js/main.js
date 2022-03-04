//declaring ids 
let loc = document.getElementById('location');
let temperature = document.getElementById('temp');
let condition = document.getElementById('cond');
let image = document.getElementById('other');
let userInput = document.getElementById('zip');
let btn = document.getElementById('btn');
let zip = "";
const key = '6821542f34e67bbd5a6f5ebac8501730'; //'api.openweathermap.org/data/2.5/weather?zip=${zip}us&appid=${api}'
let c = document.getElementById('cel')
let f = document.getElementById('fah')


function getInput() {
  let numbers = userInput.value;
  zip = numbers;
}

// async / axios 
async function loadWeather() {
  try {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`);
  // console.log(response);
  let data = await response.json();
  setState(data);
  } catch (err) {
    console.error('DANGER ZONE! ERROR WITH WEATHER DATA!', err);
  }
}

  

async function setState(data) {
  try { loc.innerText = data.name
  // console.log(loc);
  temperature.innerText = Math.round(data.main.temp);
  // console.log(temperature)
  condition.innerText = data.weather[0].description
  // console.log(condition)
  icon = data.weather[0].icon // error uncaught properties of null
  // console.log(image)
  k = Math.round(data.main.temp);
  c.innerText = Math.round(k - 273);
  f.innerText = Math.round(c.innerText * (9/5) + 32);
  //console.log(f)
 
  iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  image.innerHTML = `<img src="${iconUrl}">`;
  } catch (err) {
    alert( "DANGER ZONE: INCORRECT ZIP"); // caught it!
  }
}

  


  btn.addEventListener("click",loadWeather);