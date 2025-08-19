import CityList from "../components/CityList/CityList";

export default {
  title: "Example/CityList",
  component: CityList,
};

const cities = [
  { city: "Santo Domingo", country: "Ecuador" },
  { city: "Quito", country: "Ecuador" },
  { city: "Manta", country: "Ecuador" },
];

export const CityListExample = () => <CityList cities={cities} />;
