import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const InstallApps = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(stored);
  }, []);

  const textCount = timeline.filter((i) => i.type === "text").length;
  const callCount = timeline.filter((i) => i.type === "call").length;
  const videoCount = timeline.filter((i) => i.type === "video").length;

  const data = [
    { name: "Text", value: textCount, color: "#8b5cf6" },
    { name: "Call", value: callCount, color: "#1e3a3a" },
    { name: "Video", value: videoCount, color: "#22c55e" },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl max-w-4xl mx-auto mt-10 shadow-sm">

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Install Apps
      </h2>

      <p className="text-gray-600 font-medium mb-4">
        By Interaction Type
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Tooltip />

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            iconSize={8}
          />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default InstallApps;