import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
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
    <div>
      <h2>List of cities</h2>
      <CityList cities={cities} onClickCity={handleClick} />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
