import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const ForecastChart = ({ data }) => {
  return (
    <LineChart
      width={600}
      height={300}
      margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
      data={data}
    >
      <XAxis dataKey="dayHour" />
      <YAxis />
      <CartesianGrid />
      <Tooltip />
      <Legend />
      <Line dataKey="min" type="monotone" stroke="#FF0000" />
      <Line dataKey="max" type="monotone" stroke="#0000FF" />
    </LineChart>
  );
};

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.string.isRequired,
      max: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ForecastChart;
