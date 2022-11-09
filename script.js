const cityList = $("#city-list");
const cities = [];
const key = "fc8bffadcdca6a94d021c093eac22797";



//Function get Response Weather 

function getResponseWeather(cityName) {
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key;
