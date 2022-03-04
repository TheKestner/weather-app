

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
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`);
  // console.log(response);
  let data = await response.json();
  // console.log(data);
  setState(data);
  }

  

async function setState(data) {
    loc.innerText = data.name
    // console.log(loc);
    temperature.innerText = data.main.temp
    // console.log(temperature)
    condition.innerText = data.weather[0].description
    // console.log(condition)
    image = data.weather[0].icon // error uncaught properties of null
    // console.log(image)
    // let k = data.main.temp
    // c.innerText = k - 273
    // f.innerText = c * (9/5) + 32
    // // f = Math.floor(f)
  }

  // async function setKfc(data) {
  //   k = data.main.temp
  //   c.innerText = k - 273
  //   f.innnerText = c * (9/5) + 32
  //   f = Math.floor(f)
  // }
  
  // setKfc();
  
// setState()
//  .catch(e => console.log(e));


  


btn.addEventListener("click",loadWeather);