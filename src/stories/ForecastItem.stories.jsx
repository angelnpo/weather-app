import ForecastItem from "../components/ForecastItem";

export default {
  title: "Example/ForecastItem",
  component: ForecastItem,
};

export const sunnyMonday = () => (
  <ForecastItem
    weekDay={"Monday"}
    hour={10}
    state={"daySunny"}
    temperature={22}
  />
);
