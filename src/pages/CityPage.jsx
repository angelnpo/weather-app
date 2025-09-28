import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import useCityPage from "../hooks/useCityPage";
import { getCountryByCode } from "../utils/serviceCities";

const CityPage = (props) => {
  const { city, countryCode, chartData, forecastItemList } = useCityPage();

  const location = useLocation();
  const weather = location.state?.weather || {};

  const country = getCountryByCode(countryCode);
  const temperature = weather?.temperature;
  const state = weather?.state;
  const humidity = weather?.humidity;
  const wind = weather?.wind;

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid container size={12} justifyContent="center" alignItems="flex-end">
          <CityInfo city={city} country={country} countryCode={countryCode} />
        </Grid>

        <Grid direction={"column"} container size={12} alignItems="center">
          <Weather temperature={temperature} state={state} />
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
        </Grid>

        <Grid>{!chartData && !forecastItemList && <LinearProgress />}</Grid>

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
