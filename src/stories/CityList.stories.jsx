import { action } from "storybook/actions";
import CityList from "../components/CityList";

export default {
  title: "Components/CityList",
  component: CityList,
};

const cities = [
  { city: "Santo Domingo", country: "Ecuador", countryCode: "EC" },
  { city: "Quito", country: "Ecuador", countryCode: "EC" },
  { city: "Manta", country: "Ecuador", countryCode: "EC" },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("onClickCity")} />
);
