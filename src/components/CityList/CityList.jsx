import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import axios from "axios";

import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry =
  (eventOnClickCity) => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry;

    return (
      <ListItemButton key={city} onClick={eventOnClickCity}>
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
            {weather ? (
              <Weather
                temperature={weather?.temperature}
                state={weather?.state}
              />
            ) : (
              "No data"
            )}
          </Grid>
        </Grid>
      </ListItemButton>
    );
  };

const CityList = ({ cities, onClickCity }) => {
  const [weathers, setWeathers] = useState({});

  useEffect(() => {
    const APIKEY = "fb8b7db411601542d5a91533994353fe";

    const findWeatherByCity = (city, country, countryCode) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${APIKEY}`
        )
        .then((res) => {
          const { data } = res;
          const temperature = data.main.temp;
          const state = data.weather[0].main.toLowerCase();

          setWeathers((weathers) => {
            return {
              ...weathers,
              [`${city}-${country}`]: { temperature, state },
            };
          });
        });
      //.catch((err) => tempArray.push(err));
    }; //);

    cities.forEach(({ city, country, countryCode }) =>
      findWeatherByCity(city, country, countryCode)
    );
  }, [cities]);

  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCountry,
          weathers[`${cityAndCountry.city}-${cityAndCountry.country}`]
        )
      )}
    </List>
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
