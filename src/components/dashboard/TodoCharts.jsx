import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius - 15) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "10px" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function TodoCharts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          onMouseEnter={onPieEnter}
          activeIndex={activeIndex}
          activeShape={false}
          labelLine={false}
          label={renderCustomizedLabel}
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={80}
          fill="red"
          paddingAngle={0}
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="red"
              strokeWidth={0}
            ></Cell>
          ))}
          <g>
            <text
              x="50.95531024191172"
              y="50"
              fill="white"
              text-anchor="start"
              dominant-baseline="central"
              style="font-size: 10px;"
            >
              test
            </text>
            <text>text</text>
          </g>
        </Pie>
      </PieChart>
    </>
  );
}
