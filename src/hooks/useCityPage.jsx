import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import moment from "moment";
//import "moment/locale/es";

import { urlForecast } from "../utils/urls";
import { toCelsius } from "../utils/utils";

// Set the default locale
//moment.locale("es");

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { countryCode, city } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      try {
        const { data } = await axios.get(urlForecast(city, countryCode));

        const daysAhead = [0, 1, 2, 3, 4, 5];
        const days = daysAhead.map((dayNumber) =>
          moment().add(dayNumber, "days")
        );

        const dataAux = days
          .map((day) => {
            //filter the data list to get the temperatures of the day
            const temperatures = data.list.filter((item) => {
              const dayItem = moment.unix(item.dt).dayOfYear();
              return dayItem === day.dayOfYear();
            });

            //get the min and max temperature of the day
            const min = Math.min(...temperatures.map((item) => item.main.temp));
            const max = Math.max(...temperatures.map((item) => item.main.temp));

            return {
              dayHour: day.format("ddd"),
              min: toCelsius(min),
              max: toCelsius(max),
              hasTemperatures: temperatures.length > 0,
            };
          })
          .filter((item) => item.hasTemperatures);

        setChartData(dataAux);

        //weekDay: "Monday", hour: 12, state: "clear", temperature: 17
        const interval = [4, 8, 12, 16, 20, 24];
        const forecastItemListAux = data.list
          .filter((item, index) => interval.includes(index))
          .map((item) => {
            return {
              hour: moment.unix(item.dt).hour(),
              weekDay: moment.unix(item.dt).format("dddd"),
              state: item.weather[0].main.toLowerCase(),
              temperature: toCelsius(item.main.temp),
            };
          });
        setForecastItemList(forecastItemListAux);
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [city, countryCode]);

  return { city, countryCode, chartData, forecastItemList };
};

export default useCityPage;
