# pseudocode for Weather App
## Main Goal:
Create a webpage that prompts users to enter a zip code, then displays current weather  information for that location or a friendly error message if the zip code is not found.

- [] Use openWeathermap.org API to fetch weather data 
- [] Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
- [] Run an onClick or onSubmit that executes an Axios or fetch GET request to retrieve weather data from the API.
- [] Handle successful and unsuccessful attempts
    * 1.City name
     2.Current weather conditions
     3.Current temperature in Kelvin, Fahrenheit, and Celsius
     4.A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
    * If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
- [] Allow the user to continue entering new zip codes to get new weather data.

## Wireframe: 
1 Global page

 [ zip code  ] get weather Button that can accept Zip Code
 show data in field below that displays only after entered and data fetched:

 City: data

 Temperature: K | F | C (Provides in Celsius first from data)

 Condition:
 data(ex light rain)

 Other Info:
 (Image)


## Pseudocode:

    API call by Zip code:  
    api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

    Declare Ids for data

    City: "name": exLexington
    Temperature: temp": ex291.49
    condition: "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]
    other data: 

    Let Zip code be entered in Button Field

    add Eventhandlers/listenrs for button onsubmit Get Weather to work 

    Handle Errors
    Get Request:
    // Make a request for a user with a given ID
    axios.get('/user?ID=12345')
    .then(function (response) {
    // handle success
    console.log(response);
     })
    .catch(function (error) {
    // handle error
      console.log(error);
    })
    .then(function () {
    // always executed
    });

    Await/Sync:
    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getUser() {
    try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
    } catch (error) {
    console.error(error);
     }
    }


    Function to display data that was pulled from weather API
    If display is sucessful then city name, Current weather, current temp(KFC), Unique image

    Either catch error within the Get or Possibly Catch error its own function?



    



