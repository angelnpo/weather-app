import { getCityCode, toCelsius } from "../utils";

const getAllWeather = (res, city, countryCode) => {
  const { data } = res;
  const temperature = toCelsius(data.main.temp);
  const state = data.weather[0].main.toLowerCase();
  const humidity = data.main.humidity;
  const wind = data.wind.speed;

  return {
    [getCityCode(city, countryCode)]: { temperature, state, humidity, wind },
  };
};

export default getAllWeather;
