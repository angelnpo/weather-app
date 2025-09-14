import { render } from "@testing-library/react";
import Forecast from "./Forecast";

test("Forecast render", async () => {
  const forecastItemList = [
    { weekDay: "Monday", hour: 12, state: "daySunny", temperature: 17 },
    { weekDay: "Tuesday", hour: 14, state: "cloud", temperature: 18 },
    { weekDay: "Wednesday", hour: 18, state: "cloudy", temperature: 19 },
    { weekDay: "Thursday", hour: 17, state: "fog", temperature: 18 },
    { weekDay: "Friday", hour: 6, state: "rain", temperature: 17 },
  ];

  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />
  );

  const forecastItems = await findAllByTestId("forecast-item-container");

  //assert
  expect(forecastItems).toHaveLength(5);
});
