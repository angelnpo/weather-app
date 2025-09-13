import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <li key={city} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item size={{ xs: 12, md: 8 }}>
          <CityInfo city={city} country={country} />;
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <Weather temperature={10} state={"sunny"} />
        </Grid>
      </Grid>
    </li>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {cities.map((cityAndCountry) => renderCityAndCountry(onClickCity)(cityAndCountry))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
