import WeatherDetails from "../components/WeatherDetails";

export default {
  title: "Example/WeatherDetails",
  component: WeatherDetails,
};

export const WeatherDetailsExample = () => (
  <WeatherDetails humidity={10} wind={9} />
);
