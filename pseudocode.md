# pseudocode for Weather App
## Main Goal:
Create a webpage that prompts users to enter a zip code, then displays current weather  information for that location or a friendly error message if the zip code is not found.

- [] Use openWeathermap.org API to fetch weather data 
- [] Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
- [] Run an onClick or onSubmit that executes an Axios or fetch GET request to retrieve weather data from the API.
- [] Handle successful and unsuccessful attempts
    * 
     1.City name
     2.Current weather conditions
     3.Current temperature in Kelvin, Fahrenheit, and Celsius
     4.A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
    * 
    If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
- [] Allow the user to continue entering new zip codes to get new weather data.

## Wireframe: 
1 Global page
 [ zip code  ] get weather Button that can accept Zip Code
 show data in field below that displays only after entered and data fetched:

 City: data

 Temperature: K | F | C

 Condition
 data(ex light rain)

 Other Info:
 (Image)


## Pseudocode:

    API call by Zip code:  
    api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

    add Eventhandlers/listenrs for button click Get Weather to work 

    

    



