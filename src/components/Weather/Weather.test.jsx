import Weather from "./Weather";
import { render } from "@testing-library/react";

test("Weather render", async () => {
  //render
  const { findByRole } = render(<Weather temperature={10} state={"sunny"} />);

  //find by role
  const temp = await findByRole("heading");

  //assert
  expect(temp).toHaveTextContent("10");
});
