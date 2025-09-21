import React from "react";
import PropTypes from "prop-types";

import {
  WiThunderstorm,
  WiRain,
  WiDayCloudy,
  WiSnow,
  WiDaySunny,
  WiRaindrop,
} from "react-icons/wi";

export const validValues = [
  "thunderstorm",
  "drizzle",
  "rain",
  "snow",
  "atmosphere",
  "clear",
  "clouds",
];

const stateByName = {
  thunderstorm: WiThunderstorm,
  drizzle: WiRaindrop,
  rain: WiRain,
  snow: WiSnow,
  atmosphere: null,
  clear: WiDaySunny,
  clouds: WiDayCloudy,
};

const IconState = ({ state }) => {
  const StateByName = stateByName[state];
  return <StateByName />;
};

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;
