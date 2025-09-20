//import React from "react";
import "typeface-roboto";
import CityInfo from "../components/CityInfo";

export default {
  title: "Components/CityInfo",
  component: CityInfo,
};

export const CityExample = () => (
  <CityInfo city={"Santo Domingo"} country={"Ecuador"}></CityInfo>
);
