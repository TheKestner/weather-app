let weatherLink = 'api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=6821542f34e67bbd5a6f5ebac8501730';

//document.getElementById(weather).addEventListener('submit', );

let state = {
  weather: '',
}

// async / axios 
async function myAsyncAxios() {
  const request = await fetch(weatherLink);
  console.log(request);
  const data = request.json();
  setState(data)
}
myAsyncAxios();

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