import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Mock the page components
jest.mock("./pages/WelcomePage", () => () => <div>WelcomePage</div>);
jest.mock("./pages/MainPage", () => () => <div>MainPage</div>);
jest.mock("./pages/CityPage", () => () => <div>CityPage</div>);
jest.mock("./pages/NotFoundPage", () => () => <div>NotFoundPage</div>);

test("App renders without crashing", () => {
  render(<App />);
});
