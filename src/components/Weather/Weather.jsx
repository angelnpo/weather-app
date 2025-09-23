import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import { Typography, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import IconState from "../IconState";

const Weather = ({ temperature, state }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection={"row"}
      spacing={1}
    >
      <IconContext.Provider value={{ size: "6em" }}>
        {state ? (
          <IconState state={state} />
        ) : (
          <Skeleton variant="circular" height={80} width={80} />
        )}
      </IconContext.Provider>
      {temperature ? (
        <Typography variant="h2" display="inline">
          {temperature}
        </Typography>
      ) : (
        <Skeleton variant="rectangular" height={80} width={80} />
      )}
    </Grid>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number,
  state: PropTypes.string,
};

export default Weather;
