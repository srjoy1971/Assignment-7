import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AppDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [activeBtn, setActiveBtn] = useState(null);

  // load single friend
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const single = data.find((f) => f.id === parseInt(id));
        setFriend(single);
      });
  }, [id]);

  // SAVE TO TIMELINE
  const saveToTimeline = (type, name) => {
    const oldData =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const newItem = {
      id: Date.now(),
      type,
      name,
      date: new Date().toDateString(),
    };

    localStorage.setItem(
      "timeline",
      JSON.stringify([newItem, ...oldData])
    );
  };

  const handleClick = (type) => {
    setActiveBtn(type);
    saveToTimeline(type, friend.name);

    setTimeout(() => {
      setActiveBtn(null);
    }, 300);
  };

  if (!friend) return <p>Loading...</p>;

  return (
    <div className="p-6">

      <h1 className="text-xl font-bold mb-4">
        {friend.name}
      </h1>

      {/* BUTTONS */}
      <div className="grid grid-cols-3 gap-4">

        <button
          onClick={() => handleClick("call")}
          className={`p-4 rounded transition ${activeBtn === "call"
              ? "bg-green-200 scale-95"
              : "bg-gray-100 hover:scale-105"
            }`}
        >
          📞 Call
        </button>

        <button
          onClick={() => handleClick("text")}
          className={`p-4 rounded transition ${activeBtn === "text"
              ? "bg-blue-200 scale-95"
              : "bg-gray-100 hover:scale-105"
            }`}
        >
          💬 Text
        </button>

        <button
          onClick={() => handleClick("video")}
          className={`p-4 rounded transition ${activeBtn === "video"
              ? "bg-purple-200 scale-95"
              : "bg-gray-100 hover:scale-105"
            }`}
        >
          🎥 Video
        </button>

      </div>

    </div>
  );
};

export default AppDetails;