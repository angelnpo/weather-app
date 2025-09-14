import CityList from "../components/CityList";
import { action } from "storybook/actions";

export default {
  title: "Example/CityList",
  component: CityList,
};

const cities = [
  { city: "Santo Domingo", country: "Ecuador" },
  { city: "Quito", country: "Ecuador" },
  { city: "Manta", country: "Ecuador" },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("onClickCity")} />
);
