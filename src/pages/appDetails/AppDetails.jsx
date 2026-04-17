import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);
  const [activeBtn, setActiveBtn] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const single = data.find((f) => f.id === parseInt(id));
        setFriend(single);
      });
  }, [id]);

  const saveToTimeline = (type, name) => {
    const oldData = JSON.parse(localStorage.getItem("timeline")) || [];

    const newItem = {
      id: Date.now(),
      type,
      name,
      date: new Date().toDateString(),
    };

    localStorage.setItem("timeline", JSON.stringify([newItem, ...oldData]));
    window.dispatchEvent(new Event("storage"));
  };

  const handleClick = (type) => {
    if (!friend) return;

    setActiveBtn(type);
    saveToTimeline(type, friend.name);

    if (type === "call") toast("📞 Calling...");
    if (type === "text") toast("💬 Opening chat...");
    if (type === "video") toast("🎥 Starting video call...");

    setTimeout(() => {
      setActiveBtn(null);
    }, 300);
  };

  if (!friend) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 max-w-6xl mx-auto mt-10 rounded mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        <div className="space-y-4">
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
          </div>

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

        <div className="md:col-span-2 space-y-6">

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

          <div className="bg-white p-5 rounded shadow">

            <h3 className="mb-4 font-semibold">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <button
                onClick={() => handleClick("call")}
                className={`p-4 rounded transition-all duration-200 flex items-center justify-center gap-2
                ${activeBtn === "call"
                    ? "scale-95"
                    : "bg-gray-100 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md"
                  }`}
              >
                <LuPhoneCall /> Call
              </button>

              <button
                onClick={() => handleClick("text")}
                className={`p-4 rounded transition-all duration-200
                ${activeBtn === "text"
                    ? "scale-95"
                    : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
                  }`}
              >
                💬 Text
              </button>

              <button
                onClick={() => handleClick("video")}
                className={`p-4 rounded transition-all duration-200
                ${activeBtn === "video"
                    ? "scale-95"
                    : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
                  }`}
              >
                🎥 Video
              </button>

            </div>

            <ToastContainer position="top-center" autoClose={2000} />

          </div>

        </div>

      </div>
    </div>
  );
};

export default AppDetails;

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { RiAlarmWarningLine } from "react-icons/ri";
// import { LuPhoneCall } from "react-icons/lu";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// const handleClick = (type) => {
//   setActiveBtn(type);

//   if (type === "call") {
//     toast("Calling...");
//   }
//   else if (type === "text") {
//     toast("Opening chat...");
//   }
//   else if (type === "video") {
//     toast("Starting video call...");
//   }
// };

// const AppDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [friend, setFriend] = useState(null);
//   const [activeBtn, setActiveBtn] = useState(null);

//   // load friend
//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const single = data.find((f) => f.id === parseInt(id));
//         setFriend(single);
//       });
//   }, [id]);

//   // 🔥 SAVE TO TIMELINE
//   const saveToTimeline = (type, name) => {
//     const oldData =
//       JSON.parse(localStorage.getItem("timeline")) || [];

//     const newItem = {
//       id: Date.now(),
//       type,
//       name,
//       date: new Date().toDateString(),
//     };

//     localStorage.setItem(
//       "timeline",
//       JSON.stringify([newItem, ...oldData])
//     );

//     // 🔥 force update other tab/components
//     window.dispatchEvent(new Event("storage"));
//   };

//   // click handler
//   const handleClick = (type) => {
//     if (!friend) return;

//     setActiveBtn(type);
//     saveToTimeline(type, friend.name);

//     setTimeout(() => {
//       setActiveBtn(null);
//     }, 300);
//   };

//   if (!friend) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="p-6 bg-gray-100  max-w-6xl mx-auto mt-10 rounded mb-5">
//       {/* <button
//         onClick={() => navigate(-1)}
//         className="mb-4 text-blue-600">Back</button> */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

//         {/* LEFT SIDE */}
//         <div className="space-y-4">

//           {/* Profile */}
//           <div className="bg-white p-6 rounded-xl shadow text-center">

//             <img
//               src={friend.picture}
//               className="w-20 h-20 mx-auto rounded-full"
//             />

//             <h2 className="mt-3 font-semibold text-lg">
//               {friend.name}
//             </h2>

//             <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
//               {friend.status}
//             </span>

//             <div className="mt-2">
//               <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
//                 FAMILY
//               </span>
//             </div>

//             <p className="text-xs text-gray-500 mt-3 italic">
//               "Former colleague, great mentor"
//             </p>

//           </div>
//           <button className="w-full bg-white p-3 rounded shadow text-sm">
//             ⏸ Snooze 2 Weeks
//           </button>

//           <button className="w-full bg-white p-3 rounded shadow text-sm">
//             📦 Archive
//           </button>

//           <button className="w-full bg-white p-3 rounded shadow text-sm text-red-500">
//             🗑 Delete
//           </button>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="md:col-span-2 space-y-6">

//           {/* STATS */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

//             <div className="bg-white p-4 rounded shadow text-center">
//               <h2 className="text-xl font-bold">
//                 {friend.days_since_contact}
//               </h2>
//               <p className="text-sm text-gray-500">
//                 Days Since Contact
//               </p>
//             </div>

//             <div className="bg-white p-4 rounded shadow text-center">
//               <h2 className="text-xl font-bold">30</h2>
//               <p className="text-sm text-gray-500">
//                 Goal (Days)
//               </p>
//             </div>

//             <div className="bg-white p-4 rounded shadow text-center">
//               <h2 className="text-xl font-bold">
//                 Feb 27, 2026
//               </h2>
//               <p className="text-sm text-gray-500">
//                 Next Due
//               </p>
//             </div>
//           </div>
//           {/* Goal */}
//           <div className="bg-white p-5 rounded shadow flex justify-between items-center">
//             <div>
//               <h3 className="font-semibold">Relationship Goal</h3>
//               <p className="text-sm text-gray-500">
//                 Connect every <b>30 days</b>
//               </p>
//             </div>

//             <button className="text-sm border px-3 py-1 rounded">
//               Edit
//             </button>
//           </div>

//           {/* QUICK CHECK */}
//           <div className="bg-white p-5 rounded shadow">

//             <h3 className="mb-4 font-semibold">
//               Quick Check-In
//             </h3>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

//               <button
//                 onClick={() => handleClick("call")}
//                 className={`p-4 rounded transition-all duration-200 flex items-center justify-center gap-2
//       ${activeBtn === "call"
//                     ? "scale-95"
//                     : "bg-gray-100 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md"
//                   }`}
//               >
//                 <LuPhoneCall /> Call
//               </button>

//               <button
//                 onClick={() => handleClick("text")}
//                 className={`p-4 rounded transition-all duration-200
//       ${activeBtn === "text"
//                     ? "scale-95"
//                     : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
//                   }`}
//               >
//                 💬 Text
//               </button>

//               <button
//                 onClick={() => handleClick("video")}
//                 className={`p-4 rounded transition-all duration-200
//       ${activeBtn === "video"
//                     ? "scale-95"
//                     : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
//                   }`}
//               >
//                 🎥 Video
//               </button>

//             </div>
//             <ToastContainer position="top-center" autoClose={2000} />

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AppDetails;