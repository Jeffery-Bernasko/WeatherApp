class Weather{
    constructor(city,state){
        this.apiKey = '6868ae35e92ece63ce2f5640a3d8e44f';
        this.city = city;
        this.state = state;

    }

    // Fetch Weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const responseData  = await response.json();

        return responseData.main;
    }

    // Change Location
    changeLocation(city){
        this.city = city;
    }
}