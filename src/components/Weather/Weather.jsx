import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import IconState from "../IconState";

const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5em" }}>
        <IconState state={state} />
      </IconContext.Provider>
      <Typography variant="h3" display="inline">
        {temperature}
      </Typography>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;
