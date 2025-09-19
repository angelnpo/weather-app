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
  ResponsiveContainer,
} from "recharts";

const ForecastChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"95%"} height={300}>
      <LineChart
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
    </ResponsiveContainer>
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
