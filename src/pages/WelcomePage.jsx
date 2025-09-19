import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WelcomePage = (props) => {
  return (
    <div>
      WelcomePage
      <Link to="/main"> Go to Main</Link>
    </div>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;
