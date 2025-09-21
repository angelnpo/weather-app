import { render, fireEvent } from "@testing-library/react";

import CityList from "./CityList";

test("CityListRender", async () => {
  const fnClickOnItem = jest.fn();
  const cities = [{ city: "City", country: "Country", countryCode: "EC" }];

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("button");

  //assert
  expect(items).toHaveLength(1);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();

  const cities = [{ city: "City", country: "Country", countryCode: "EC" }];
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("button");

  //assert
  fireEvent.click(items[0]);
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
