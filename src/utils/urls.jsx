const APIKEY = "fb8b7db411601542d5a91533994353fe";

export const urlWeather = (city, countryCode) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${APIKEY}`;

export const urlForecast = (city, countryCode) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${APIKEY}`;
