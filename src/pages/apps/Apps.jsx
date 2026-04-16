import React, { useEffect, useState } from "react";

const Apps = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  // 🔥 LIVE LOAD (IMPORTANT FIX)
  useEffect(() => {
    const loadData = () => {
      const stored =
        JSON.parse(localStorage.getItem("timeline")) || [];
      setData(stored);
    };

    loadData();

    // 🔥 listen for changes
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
    };
  }, []);

  // filter logic
  const filteredData =
    filter === "all"
      ? data
      : data.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "call") return "📞";
    if (type === "text") return "💬";
    if (type === "video") return "🎥";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold mb-4">
        Timeline
      </h1>

      {/* FILTER */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 px-16 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]"
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {/* LIST */}
      <div className="space-y-3">

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow flex items-center gap-4"
          >
            <div className="text-2xl">
              {getIcon(item.type)}
            </div>

            <div>
              <h3 className="font-semibold">
                {item.type.toUpperCase()} with {item.name}
              </h3>
              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Apps;