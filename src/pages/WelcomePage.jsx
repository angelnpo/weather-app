import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { IconContext } from "react-icons/lib";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import WelcomeScreen from "../components/WelcomeScreen";
import { WiDaySunny } from "react-icons/wi";

const WelcomePage = (props) => {
  return (
    <div>
      <WelcomeScreen>
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"center"}
          className="full"
        >
          <div className="highlight">
            <Grid
              container
              flexDirection={"column"}
              size={{ xs: 12 }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid>
                <IconContext.Provider value={{ size: "6em" }}>
                  <WiDaySunny />
                </IconContext.Provider>
              </Grid>
              <Grid
                container
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant={"h4"} color="inherit">
                  Weather app
                </Typography>
                <Link
                  to="/main"
                  color="inherit"
                  aria-label="menu"
                  component={RouterLink}
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Go to main page
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </WelcomeScreen>
    </div>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;
