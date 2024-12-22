import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "April", visitors: 50, sales: 30 },
  { month: "May", visitors: 70, sales: 45 },
  { month: "June", visitors: 40, sales: 60 },
  { month: "July", visitors: 90, sales: 75 },
  { month: "August", visitors: 85, sales: 90 },
  { month: "Sept", visitors: 100, sales: 105 },
];

const RechartsLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
        <Line type="monotone" dataKey="sales" stroke="#00AFB9" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RechartsLineChart;
