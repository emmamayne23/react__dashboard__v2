
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Math", score: 90 },
  { subject: "Science", score: 85 },
  { subject: "English", score: 70 },
  { subject: "History", score: 75 },
  { subject: "Art", score: 95 },
];

const RadarChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Tooltip />
      <Radar
        name="Scores"
        dataKey="score"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  </ResponsiveContainer>
);

export default RadarChartExample;
