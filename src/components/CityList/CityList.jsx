import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Alert from "@mui/material/Alert";
import axios from "axios";
import convert from "convert-units";

import CityInfo from "../CityInfo";
import Weather from "../Weather";

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

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
  const [weathers, setWeathers] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const findWeatherByCity = async (city, countryCode) => {
      const APIKEY = "fb8b7db411601542d5a91533994353fe";
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${APIKEY}`
        );

        const { data } = res;
        const temperature = convert(data.main.temp)
          .from("K")
          .to("C")
          .toFixed(0);
        const state = data.weather[0].main.toLowerCase();

        setWeathers((weathers) => {
          return {
            ...weathers,
            [getCityCode(city, countryCode)]: { temperature, state },
          };
        });
      } catch (err) {
        setError("An error has occurred. Please contact the administrator.");
        if (err.response) {
          console.log("Internal server error:", err.response);
        } else if (err.request) {
          console.log("Internal server error:", err.request);
        } else {
          console.log("Unknown error:", err);
        }
      }
    };

    cities.forEach(({ city, countryCode }) =>
      findWeatherByCity(city, countryCode)
    );
  }, [cities]);

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
