import { useEffect, useState } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function TimeSeriesChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.post(
        "http://localhost:8000/timeseries"
      );

      const years = response.data.years;
      const vegetation = response.data.vegetation_percent;

      const chartData = years.map((year, index) => ({
        year,
        vegetation: vegetation[index],
      }));

      setData(chartData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Vegetation Trend
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="vegetation"
            stroke="#22c55e"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default TimeSeriesChart;