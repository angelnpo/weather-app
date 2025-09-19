import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <Grid container>
      <Typography>Humidity: {humidity}%</Typography>{" "}
      <Typography>Wind: {wind}km/h</Typography>
    </Grid>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
