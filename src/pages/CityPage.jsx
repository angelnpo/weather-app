import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";

const dataExample = [
  { dayHour: "Mon 18", min: 18, max: 30 },
  { dayHour: "Tue 06", min: 21, max: 34 },
  { dayHour: "Wed 09", min: 20, max: 28 },
  { dayHour: "Thu 08", min: 19, max: 17 },
  { dayHour: "Fri 19", min: 17, max: 26 },
];

const forecastItemListExample = [
  { weekDay: "Monday", hour: 12, state: "clear", temperature: 17 },
  { weekDay: "Tuesday", hour: 14, state: "clouds", temperature: 18 },
  { weekDay: "Wednesday", hour: 18, state: "clouds", temperature: 19 },
  { weekDay: "Thursday", hour: 17, state: "drizzle", temperature: 18 },
  { weekDay: "Friday", hour: 6, state: "rain", temperature: 17 },
];

const CityPage = (props) => {
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid container size={12} justifyContent="center" alignItems="flex-end">
          <CityInfo city="Santo Domingo" country="Ecuador" countryCode="EC" />
        </Grid>

        <Grid direction={"column"} container size={12} alignItems="center">
          <Weather temperature={1} state={"clear"} />
          <WeatherDetails humidity={80} wind={5} />
        </Grid>

        <Grid>
          <ForecastChart data={data} />
        </Grid>

        <Grid>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};

CityPage.propTypes = {};

export default CityPage;
