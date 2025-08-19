//import React from "react";
import "typeface-roboto";
import CityInfo from "../components/CityInfo/CityInfo";

export default {
  title: "Example/CityInfo",
  component: CityInfo,
};

export const CityExample = () => (
  <CityInfo city={"Santo Domingo"} country={"Ecuador"}></CityInfo>
);
