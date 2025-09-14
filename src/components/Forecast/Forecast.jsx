import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import ForecastItem from "../ForecastItem";
import { validValues } from "../IconState";

const renderForecastItem = (forecastItem) => {
  const { weekDay, hour, state, temperature } = forecastItem;
  return (
    <Grid data-testid="forecast-item-container" key={`${weekDay}${hour}`} item>
      <ForecastItem
        weekDay={weekDay}
        hour={hour}
        state={state}
        temperature={temperature}
      />
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justify="center" alignItems="center">
      {forecastItemList.map((forecastItem) => renderForecastItem(forecastItem))}
    </Grid>
  );
};

Forecast.propTypes = {
  forecastItem: PropTypes.shape({
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
  }).isRequired,
};

export default Forecast;
