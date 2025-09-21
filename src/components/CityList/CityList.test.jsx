import { render, fireEvent, screen } from "@testing-library/react";
import CityList from "./CityList";
import axios from "axios";

// Mock axios
jest.mock("axios");

describe("CityList", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Setup axios mock
    axios.get.mockResolvedValue({
      data: {
        main: { temp: 280.32 },
        weather: [{ main: "Clear" }],
      },
    });
  });

  test("renders city list", async () => {
    const fnClickOnItem = jest.fn();
    const cities = [{ city: "City", country: "Country", countryCode: "EC" }];

    render(<CityList cities={cities} onClickCity={fnClickOnItem} />);

    // Wait for the component to finish loading
    const items = await screen.findAllByRole("button");

    // Assert
    expect(items).toHaveLength(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("calls onClickCity when a city is clicked", async () => {
    const fnClickOnItem = jest.fn();
    const cities = [{ city: "City", country: "Country", countryCode: "EC" }];

    render(<CityList cities={cities} onClickCity={fnClickOnItem} />);

    // Wait for the component to finish loading
    const item = await screen.findByRole("button");

    // Act
    fireEvent.click(item);

    // Assert
    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
  });
});
