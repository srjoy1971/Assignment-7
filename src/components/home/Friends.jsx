import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 mb-8 bg-gray-50 min-h-screen max-w-6xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-8xl mx-auto text-center">

        {friends.map((friend) => (
          <div
            key={friend.id}
            onClick={() => navigate(`/apps/${friend.id}`)}
            className="bg-white p-5 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg transition"
          >

            {/* Image */}
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />

            {/* Name */}
            <h3 className="mt-3 font-semibold text-lg">
              {friend.name}
            </h3>

            {/* Email */}
            <p className="text-sm text-gray-500">
              {friend.email}
            </p>

            {/* Days */}
            <p className="text-xs text-gray-400 mt-1">
              {friend.days_since_contact}d ago
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Status */}
            <div className="mt-3">
              <span
                className={`text-xs px-3 py-1 rounded-full text-white ${friend.status?.toLowerCase() === "overdue"
                  ? "bg-red-500"
                  : friend.status?.toLowerCase().includes("almost")
                    ? "bg-yellow-500"
                    : "bg-green-600"
                  }`}
              >
                {friend.status}
              </span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Friends;