import React from "react";
import PropTypes from "prop-types";

import {
  WiCloud,
  WiCloudy,
  WiFog,
  WiRain,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
} from "react-icons/wi";

export const validValues = [
  "cloud",
  "cloudy",
  "fog",
  "rain",
  "dayCloudy",
  "dayFog",
  "daySunny",
];

const stateByName = {
  cloud: WiCloud,
  cloudy: WiCloudy,
  fog: WiFog,
  rain: WiRain,
  dayCloudy: WiDayCloudy,
  dayFog: WiDayFog,
  daySunny: WiDaySunny,
};

const IconState = ({ state }) => {
  const StateByName = stateByName[state];
  return <StateByName />;
};

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;
