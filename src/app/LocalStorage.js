export class LocalStorage{

    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'Moscow';
        this.defaultCountry = 'ru';
    }

    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

    getLocationData(){
        if(null == localStorage.getItem('city')){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }

        if(null == localStorage.getItem('countryCode')){
            this.countryCode = this.defaultCountry;
        }else{
            this.countryCode = localStorage.getItem('countryCode');
        }
        
        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }
}