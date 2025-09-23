import React from "react";
import PropTypes from "prop-types";

import useWelcomePage from "../../hooks/useWelcomePage";

const WelcomeScreen = ({ children }) => {
  const { myRefDiv } = useWelcomePage();

  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
