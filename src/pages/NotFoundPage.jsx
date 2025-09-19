import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <div>
      NotFoundPage <Link to="/main"> Go to Main</Link>
    </div>
  );
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
