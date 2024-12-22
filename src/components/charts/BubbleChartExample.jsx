
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: 10, y: 20, z: 100 },
  { x: 30, y: 50, z: 200 },
  { x: 50, y: 80, z: 300 },
  { x: 70, y: 100, z: 400 },
  { x: 90, y: 150, z: 500 },
];

const BubbleChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart>
      <CartesianGrid />
      <XAxis dataKey="x" name="X-Value" />
      <YAxis dataKey="y" name="Y-Value" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter
        data={data}
        fill="#8884d8"
        name="Bubble"
        shape="circle"
        sizeKey="z"
      />
    </ScatterChart>
  </ResponsiveContainer>
);

export default BubbleChartExample;
