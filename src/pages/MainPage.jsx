import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import CityList from "../components/CityList";

const MainPage = (props) => {
  const navigate = useNavigate();

  const cities = [
    { city: "Santo Domingo", country: "Ecuador" },
    { city: "Quito", country: "Ecuador" },
    { city: "Manta", country: "Ecuador" },
  ];

  const handleClick = () => {
    navigate("/city");
  };

  return (
    <Paper elevation={3}>
      <CityList cities={cities} onClickCity={handleClick} />
    </Paper>
  );
};

MainPage.propTypes = {};

export default MainPage;
