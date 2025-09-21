import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

import CityList from "../components/CityList";
import AppFrame from "../components/AppFrame";

const MainPage = (props) => {
  const navigate = useNavigate();

  const cities = [
    { city: "Santo Domingo", country: "Ecuador", countryCode: "EC" },
    { city: "Quito", country: "Ecuador", countryCode: "EC" },
    { city: "Manta", country: "Ecuador", countryCode: "EC" },
    { city: "Bogota", country: "Colombia", countryCode: "CO" },
  ];

  const handleClick = () => {
    navigate("/city");
  };

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
