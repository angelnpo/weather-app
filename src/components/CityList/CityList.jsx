import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <ListItemButton key={city} onClick={eventOnClickCity}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Weather temperature={10} state={"daySunny"} />
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(cityAndCountry)
      )}
    </List>
  );
};

CityList.propTypes = {
  //cities: PropTypes.array.isRequired,
  cities: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
