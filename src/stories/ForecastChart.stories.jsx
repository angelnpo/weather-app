import ForecastChart from "../components/ForecastChart";

export default {
  title: "Example/ForecastChart",
  component: ForecastChart,
};

const data = [
  { dayHour: "Mon 18", min: 18, max: 30 },
  { dayHour: "Tue 06", min: 21, max: 34 },
  { dayHour: "Wed 09", min: 20, max: 28 },
  { dayHour: "Thu 08", min: 19, max: 17 },
  { dayHour: "Fri 19", min: 17, max: 26 },
];

export const ForecastChartExample = () => <ForecastChart data={data} />;
