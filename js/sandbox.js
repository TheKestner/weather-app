

//declaring ids 
let loc = document.getElementById('location');
let temperature = document.getElementById('temp');
let condition = document.getElementById('cond');
let image = document.getElementById('other');
let userInput = document.getElementById('zip');
let btn = document.getElementById('btn');
let zip = "";
const key = '6821542f34e67bbd5a6f5ebac8501730'; //'api.openweathermap.org/data/2.5/weather?zip=${zip}us&appid=${api}'
//let weatherLink = 'api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=6821542f34e67bbd5a6f5ebac8501730';

//document.getElementById(weather).addEventListener('submit', );



// let state = {
//   loc: '',
//   temperature:0,
//   condition:'',
//   image:'',
// }
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
    console.log(loc);
    temperature.innerText = data.main.temp
    console.log(temperature)
    condition.innerText = data.weather[0].description
    console.log(condition)
    let image = data.weather[0].icon // error uncaught properties of null
    console.log(image)
    
     
    //let values = await Promise.all([loc, temperature, condition, image])

    
  }

  


  


  btn.addEventListener("click",loadWeather);





// function myFetchPromises() {
//   // FETCH / Promise
//   fetch(weatherLink)
//     .then(resp => {
//       return resp.json();
//     })
//     .then(data => {
//       setState(data)
//     })
//     .catch(err => {
//       console.log(err);
//     })  
// }



// function getWeather(){
//    axios
//     .get('api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=6821542f34e67bbd5a6f5ebac8501730')
//     .then(res => showOutput(res))
//     .catch(err => console.log(err));
// }


///axios.get()
// .then(function (response) {
// // handle success
// console.log(response);
//  })
// .catch(function (error) {
// // handle error
//   console.log(error);
// })
// .then(function () {
// // always executed
// });