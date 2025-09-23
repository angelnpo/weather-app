import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import useCityPage from "../hooks/useCityPage";

const CityPage = (props) => {
  const { city, countryCode, chartData, forecastItemList } = useCityPage();

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

        <Grid>{chartData && <ForecastChart data={chartData} />}</Grid>

        <Grid>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

CityPage.propTypes = {};

export default CityPage;
