import Forecast from "../components/Forecast";

export default {
  title: "Components/Forecast",
  component: Forecast,
};

const forecastItemList = [
  { weekDay: "Monday", hour: 12, state: "clear", temperature: 17 },
  { weekDay: "Tuesday", hour: 14, state: "clouds", temperature: 18 },
  { weekDay: "Wednesday", hour: 18, state: "clouds", temperature: 19 },
  { weekDay: "Thursday", hour: 17, state: "drizzle", temperature: 18 },
  { weekDay: "Friday", hour: 6, state: "rain", temperature: 17 },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
