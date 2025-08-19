import { render } from "@testing-library/react";
import CityList from "./CityList";

test("CityListRender", async () => {
  const cities = [{ city: "City", country: "Country" }];
  const { findAllByRole } = render(<CityList cities={cities} />);

  const items = await findAllByRole("listitem");

  //assert
  expect(items).toHaveLength(1);
});
