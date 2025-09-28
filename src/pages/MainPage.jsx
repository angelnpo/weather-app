import React, { useState, useCallback, useMemo } from "react";
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

  const cities = getCities();

  const handleClick = (city, countryCode) => {
    const weather = weathers[getCityCode(city, countryCode)];
    navigate(`/city/${countryCode}/${city}`, { state: { weather: weather } });
  };

  // const handleSetWeathers = useMemo(
  //   () => (weather) => setWeathers((weathers) => ({ ...weathers, ...weather })),
  //   [setWeathers]
  // );

  const handleSetWeathers = useCallback(
    (weather) => {
      setWeathers((weathers) => {
        const newWeathers = { ...weathers, ...weather };
        return newWeathers;
      });
    },
    [setWeathers]
  );

  const actions = useMemo(() => {
    return {
      handleSetWeathers: handleSetWeathers,
    };
  }, [handleSetWeathers]);

  const data = useMemo(() => {
    return { weathers: weathers };
  }, [weathers]);

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={cities}
          data={data}
          onClickCity={handleClick}
          actions={actions}
        />
      </Paper>
    </AppFrame>
  );
};

MainPage.propTypes = {};

export default MainPage;
