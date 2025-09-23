import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Alert from "@mui/material/Alert";
import useCityList from "../../hooks/useCityList";

import { getCityCode } from "../../utils/utils";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry =
  (eventOnClickCity) => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry;

    return (
      <ListItemButton
        key={getCityCode(city, countryCode)}
        onClick={() => eventOnClickCity(city, countryCode)}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1 }}
        >
          <Grid size={{ xs: 12, md: 9 }}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Weather
              temperature={weather?.temperature}
              state={weather?.state}
            />
          </Grid>
        </Grid>
      </ListItemButton>
    );
  };

const CityList = ({ cities, onClickCity }) => {
  const { weathers, error, setError } = useCityList(cities);

  return (
    <div>
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            weathers[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
