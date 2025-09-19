import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import { Typography, Grid } from "@mui/material";
import IconState from "../IconState";

const Weather = ({ temperature, state }) => {
  return (
    <Grid container alignItems="center">
      <IconContext.Provider value={{ size: "6em" }}>
        <IconState state={state} />
      </IconContext.Provider>
      <Typography variant="h2" display="inline">
        {temperature}
      </Typography>
    </Grid>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;
