import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "April", visitors: 50 },
  { month: "May", visitors: 70 },
  { month: "June", visitors: 40 },
  { month: "July", visitors: 90 },
  { month: "August", visitors: 85 },
];

const AreaChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="visitors"
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default AreaChartExample;
