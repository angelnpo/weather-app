import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import IconState from "../IconState";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid>
        <IconContext.Provider value={{ size: "5em" }}>
          <IconState state={state}></IconState>
        </IconContext.Provider>
      </Grid>
      <Grid>
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
