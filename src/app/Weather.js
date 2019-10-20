export class Weather{

    /**
     * Constructor.
     * @param {*} city 
     * @param {*} countryCode 
     */
    constructor(city, countryCode){
        this.apiKey = 'fd15365fb825e34a3713465090fdc4f3';
        this.city = city;
        this.countryCode = countryCode;
    }

    /**
     * 
     */
    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        let response = await fetch(URI);
        let data = await response.json();
        return data;
    }

    /**
     * 
     * @param {*} city 
     * @param {*} countryCode 
     */
    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }

}