//declaring ids 
let loc = document.getElementById('location');
let temperature = document.getElementById('temp');
let condition = document.getElementById('cond');
let image = document.getElementById('other');

const btn = document.getElementById('click','add');
const key = '6821542f34e67bbd5a6f5ebac8501730'; //'api.openweathermap.org/data/2.5/weather?zip=${zip}us&appid=${api}'

//let weatherLink = 'api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=6821542f34e67bbd5a6f5ebac8501730';
//document.getElementById(weather).addEventListener('submit', );


// let state = {
//   City: '',
//   Temperature:0,
//   Condition:'',
//   Image:'',
// }



// async / axios 
async function loadWeather() {
  let response = await fetch('api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}');
  console.log(response);
  let data = response.json();
  setState(data)
}

loadWeather();







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