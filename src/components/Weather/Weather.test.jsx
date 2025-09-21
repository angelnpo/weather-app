import { render } from "@testing-library/react";

import Weather from "./Weather";

test("Weather render", async () => {
  //render
  const { findByRole } = render(<Weather temperature={10} state={"clear"} />);

  //find by role
  const temp = await findByRole("heading");

  //assert
  expect(temp).toHaveTextContent("10");
});
