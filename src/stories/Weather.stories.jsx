import Weather from "../components/Weather/Weather";

export default {
  title: "Example/Weather",
  component: Weather,
};

export const WeatherCloud = () => <Weather temperature={10} state={"cloud"} />;
export const WeatherSunny = () => <Weather temperature={22} state={"sunny"} />;
