import ForecastItem from "../components/ForecastItem";

export default {
  title: "Components/ForecastItem",
  component: ForecastItem,
};

export const SunnyMonday = () => (
  <ForecastItem weekDay={"Monday"} hour={10} state={"clear"} temperature={22} />
);
