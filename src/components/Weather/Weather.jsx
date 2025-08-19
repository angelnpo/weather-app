import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { IconContext } from "react-icons";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiFog,
  WiRain,
} from "react-icons/wi";

const stateByName = {
  cloud: WiCloud,
  cloudy: WiCloudy,
  fog: WiFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const renderState = (state) => {
  let Icon = stateByName[state];
  return <Icon />;
};

const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5em" }}>
        {renderState(state)}
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
