const weather = new Weather('Accra','GH');

// weather.changeLocation('Miami','FL')

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', GetWeather);

function GetWeather(){
weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
}