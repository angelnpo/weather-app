import Weather from "../components/Weather";

export default {
  title: "Components/Weather",
  component: Weather,
};

export const WeatherCloud = () => <Weather temperature={10} state={"cloud"} />;
export const WeatherSunny = () => (
  <Weather temperature={22} state={"daySunny"} />
);
