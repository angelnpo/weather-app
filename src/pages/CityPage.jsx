import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import axios from "axios";
import convert from "convert-units";
import moment from "moment";
//import "moment/locale/es";

import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";

// Set the default locale
//moment.locale("es");

// const dataExample = [
//   { dayHour: "Mon 18", min: 18, max: 30 },
//   { dayHour: "Tue 06", min: 21, max: 34 },
//   { dayHour: "Wed 09", min: 20, max: 28 },
//   { dayHour: "Thu 08", min: 19, max: 17 },
//   { dayHour: "Fri 19", min: 17, max: 26 },
// ];

// const forecastItemListExample = [
//   { weekDay: "Monday", hour: 12, state: "clear", temperature: 17 },
//   { weekDay: "Tuesday", hour: 14, state: "clouds", temperature: 18 },
//   { weekDay: "Wednesday", hour: 18, state: "clouds", temperature: 19 },
//   { weekDay: "Thursday", hour: 17, state: "drizzle", temperature: 18 },
//   { weekDay: "Friday", hour: 6, state: "rain", temperature: 17 },
//   { weekDay: "Saturday", hour: 6, state: "rain", temperature: 17 },
// ];

const CityPage = (props) => {
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { countryCode, city } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const APIKEY = "fb8b7db411601542d5a91533994353fe";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${APIKEY}`;

      try {
        const { data } = await axios.get(url);
        console.log(data);

        const daysAhead = [0, 1, 2, 3, 4, 5];
        const days = daysAhead.map((dayNumber) =>
          moment().add(dayNumber, "days")
        );

        const toCelsius = (kelvin) =>
          convert(kelvin).from("K").to("C").toFixed(0);

        const dataAux = days.map((day) => {
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
          };
        });

        console.log(dataAux);
        setData(dataAux);

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

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid container size={12} justifyContent="center" alignItems="flex-end">
          <CityInfo city={city} country="Ecuador" countryCode={countryCode} />
        </Grid>

        <Grid direction={"column"} container size={12} alignItems="center">
          <Weather temperature={17} state={"clear"} />
          <WeatherDetails humidity={80} wind={5} />
        </Grid>

        <Grid>{data && <ForecastChart data={data} />}</Grid>

        <Grid>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

CityPage.propTypes = {};

export default CityPage;
