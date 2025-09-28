import { useEffect, useState } from "react";
import axios from "axios";

import { urlWeather } from "../utils/urls";
import getAllWeather from "../utils/transform/getAllWeather";
import { getCityCode } from "../utils/utils";

const useCityList = (cities, handleSetWeathers, weathers) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const findWeatherByCity = async (city, countryCode) => {
      try {
        handleSetWeathers({ [getCityCode(city, countryCode)]: {} });

        const res = await axios.get(urlWeather(city, countryCode));

        const weather = getAllWeather(res, city, countryCode);
        handleSetWeathers(weather);
      } catch (err) {
        setError("An error has occurred. Please contact the administrator.");
        if (err.response) {
          console.log("Internal server error:", err.response);
        } else if (err.request) {
          console.log("Internal server error:", err.request);
        } else {
          console.log("Unknown error:", err);
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      if (!weathers[getCityCode(city, countryCode)]) {
        findWeatherByCity(city, countryCode);
      }
    });
  }, [cities, handleSetWeathers, weathers]);

  return { error, setError };
};

export default useCityList;
