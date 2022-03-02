const { default: axios } = require("axios");

let weather = 'api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=6821542f34e67bbd5a6f5ebac8501730';



async function getWeather() {
    try {
      const response = await axios.get('api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=6821542f34e67bbd5a6f5ebac8501730');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(weather);









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