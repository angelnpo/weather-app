import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

import CityList from "../components/CityList";
import AppFrame from "../components/AppFrame";
import { getCities } from "../utils/serviceCities";

const MainPage = (props) => {
  const navigate = useNavigate();

  const handleClick = (city, countryCode) => {
    navigate(`/city/${countryCode}/${city}`);
  };

  const cities = getCities();

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={handleClick} />
      </Paper>
    </AppFrame>
  );
};

MainPage.propTypes = {};

export default MainPage;
