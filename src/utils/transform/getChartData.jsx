import moment from "moment";
//import "moment/locale/es";

import { toCelsius } from "../utils";

// Set the default locale
//moment.locale("es");

const getChartData = (data) => {
  const daysAhead = [0, 1, 2, 3, 4, 5];
  const days = daysAhead.map((dayNumber) => moment().add(dayNumber, "days"));

  const dataChart = days
    .map((day) => {
      //filter the data list to get the temperatures of the day
      const temperatures = data.list.filter((item) => {
        const dayItem = moment.unix(item.dt).dayOfYear();
        return dayItem === day.dayOfYear();
      });

      //get the min and max temperature of the day
      const min = Math.min(...temperatures.map((item) => item.main.temp));
      const max = Math.max(...temperatures.map((item) => item.main.temp));

      return {
        dayHour: day.format("ddd"),
        min: toCelsius(min),
        max: toCelsius(max),
        hasTemperatures: temperatures.length > 0,
      };
    })
    .filter((item) => item.hasTemperatures);

  return dataChart;
};

export default getChartData;
