import React, { useState, useEffect, useDebugValue } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { urlForecast } from "../utils/urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { countryCode, city } = useParams();
  //only for debug
  useDebugValue(`City: ${city}`);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const { data } = await axios.get(urlForecast(city, countryCode));

        const dataChart = getChartData(data);
        setChartData(dataChart);

        const dataForecastItemList = getForecastItemList(data);
        setForecastItemList(dataForecastItemList);
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [city, countryCode]);

  return { city, countryCode, chartData, forecastItemList };
};

export default useCityPage;
