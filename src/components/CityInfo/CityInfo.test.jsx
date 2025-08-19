import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo";

test("CityInfoRender", async () => {
  const city = "City";
  const country = "Country";
  //render
  const { findAllByRole } = render(<CityInfo city={city} country={country} />);

  //find by type heading (h1, h2...)
  const cityComponents = await findAllByRole("heading");

  //assert
  expect(cityComponents[0]).toHaveTextContent(city);
  expect(cityComponents[1]).toHaveTextContent(country);
});
