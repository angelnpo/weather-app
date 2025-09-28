import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

import CityList from "../components/CityList";
import AppFrame from "../components/AppFrame";
import { getCities } from "../utils/serviceCities";
import { getCityCode } from "../utils/utils";

const MainPage = (props) => {
  const [weathers, setWeathers] = useState({});
  const navigate = useNavigate();

  const handleClick = (city, countryCode) => {
    const weather = weathers[getCityCode(city, countryCode)];
    navigate(`/city/${countryCode}/${city}`, { state: { weather: weather } });
  };

  const cities = getCities();

  const handleSetWeathers = useMemo(
    () => (weather) => setWeathers((weathers) => ({ ...weathers, ...weather })),
    [setWeathers]
  );

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={cities}
          weathers={weathers}
          onClickCity={handleClick}
          handleSetWeathers={handleSetWeathers}
        />
      </Paper>
    </AppFrame>
  );
};

MainPage.propTypes = {};

export default MainPage;
