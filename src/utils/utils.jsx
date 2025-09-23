import convert from "convert-units";
export const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

export const toCelsius = (kelvin) =>
  convert(kelvin).from("K").to("C").toFixed(0);
