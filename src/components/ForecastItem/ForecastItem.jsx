import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import IconState from "../IconState";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{ size: "5em" }}>
          <IconState state={state}></IconState>
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature}ºC</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
