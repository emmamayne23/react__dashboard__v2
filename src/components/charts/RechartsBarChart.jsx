import { BarChart, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip, Bar, CartesianGrid } from "recharts"

const salesData = [
  { month: "April", sales: 120, lastYearSales: 100 },
  { month: "May", sales: 150, lastYearSales: 190 },
  { month: "June", sales: 100, lastYearSales: 40 },
  { month: "July", sales: 170, lastYearSales: 130 },
  { month: "August", sales: 200, lastYearSales: 100 },
  { month: "Sept", sales: 180, lastYearSales: 100 },
]

const RechartsBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
        <BarChart data={salesData} margin={{ top:20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="lastYearSales" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default RechartsBarChart