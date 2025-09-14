import { render } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

test("ForecastItem render", async () => {
  const { getByText } = render(
    <ForecastItem
      weekDay={"Monday"}
      hour={10}
      state={"daySunny"}
      temperature={22}
    />
  );

  // Check by text
  const textMonday = await getByText("Monday");

  //assert
  expect(textMonday).toBeInTheDocument();
  expect(getByText("10")).toBeInTheDocument();
  expect(getByText("22ºC")).toBeInTheDocument();
});
