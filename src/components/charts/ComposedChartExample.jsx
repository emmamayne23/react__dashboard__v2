
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "April", sales: 120, revenue: 50 },
  { month: "May", sales: 150, revenue: 70 },
  { month: "June", sales: 100, revenue: 40 },
  { month: "July", sales: 170, revenue: 90 },
  { month: "August", sales: 200, revenue: 85 },
];

const ComposedChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" barSize={40} fill="#8884d8" />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </ComposedChart>
  </ResponsiveContainer>
);

export default ComposedChartExample;
