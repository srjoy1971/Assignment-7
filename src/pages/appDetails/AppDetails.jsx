import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const single = data.find((f) => f.id === parseInt(id));
        setFriend(single);
      });
  }, [id]);

  if (!friend) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          {/* Profile Card */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={friend.picture}
              className="w-20 h-20 mx-auto rounded-full"
            />

            <h2 className="mt-3 font-semibold text-lg">
              {friend.name}
            </h2>

            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
              {friend.status}
            </span>

            <div className="mt-2">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                FAMILY
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-3 italic">
              "Former colleague, great mentor"
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Preferred: email
            </p>
          </div>

          {/* Buttons */}
          <button className="w-full bg-white p-3 rounded shadow text-sm">
            ⏸ Snooze 2 Weeks
          </button>

          <button className="w-full bg-white p-3 rounded shadow text-sm">
            📦 Archive
          </button>

          <button className="w-full bg-white p-3 rounded shadow text-sm text-red-500">
            🗑 Delete
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-xl font-bold">30</h2>
              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-xl font-bold">
                Feb 27, 2026
              </h2>
              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>

          </div>

          {/* Goal */}
          <div className="bg-white p-5 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every <b>30 days</b>
              </p>
            </div>

            <button className="text-sm border px-3 py-1 rounded">
              Edit
            </button>
          </div>

          {/* Quick Check */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="mb-4 font-semibold">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <button className="bg-gray-100 p-4 rounded">
                📞 Call
              </button>

              <button className="bg-gray-100 p-4 rounded">
                💬 Text
              </button>

              <button className="bg-gray-100 p-4 rounded">
                🎥 Video
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AppDetails;