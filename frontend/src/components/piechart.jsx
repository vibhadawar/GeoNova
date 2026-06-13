import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#6b7280"];

function PieChartComponent({ stats }) {
  const data = [
    {
      name: "Vegetation",
      value: stats.vegetation_percent,
    },
    {
      name: "Water",
      value: stats.water_percent,
    },
    {
      name: "Urban",
      value: stats.urban_percent,
    },
  ];

  return (
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"><h2 className="text-2xl font-bold text-black dark:text-white mb-6">        Land Cover Distribution
      </h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
}

export default PieChartComponent;