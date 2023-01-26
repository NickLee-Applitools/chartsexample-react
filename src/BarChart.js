import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 200,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 8210
  },
  {
    name: "Page C",
    uv: 8900, // 2000 --> 8900
    pv: 800, // 9000 --->800
    amt: 2290
  },
  {
    name: "Page D",
    uv: 780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 300,
    pv: 300,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490, //3490 --->9000
    pv: 1300, //1300 ->7000
    amt: 2100
  }
];

export default function BarChartApp() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}

// Comment out Cartesiain and both Bar components