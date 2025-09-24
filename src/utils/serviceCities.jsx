const cities = [
  { city: "Santo Domingo", country: "Ecuador", countryCode: "EC" },
  { city: "Quito", country: "Ecuador", countryCode: "EC" },
  { city: "Manta", country: "Ecuador", countryCode: "EC" },
  { city: "Bogota", country: "Colombia", countryCode: "CO" },
];

export const getCities = () => cities;

export const getCountryByCode = (countryCode) => {
  return cities.find((city) => city.countryCode === countryCode).country;
};
