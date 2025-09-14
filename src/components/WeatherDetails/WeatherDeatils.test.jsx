import { render } from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";

test("WeatherDetails render", async () => {
  const { findByText } = render(<WeatherDetails humidity={80} wind={10} />);

  //const humidity = await findByText("Humidity");
  //use regex by search any text before and after of 10
  const humidity = await findByText(/80/);
  const wind = await findByText(/10/);

  //assert
  expect(humidity).toHaveTextContent("Humidity: 80%");
  expect(wind).toHaveTextContent("Wind: 10km/h");
});
