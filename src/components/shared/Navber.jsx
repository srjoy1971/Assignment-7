import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navber = () => {
  const location = useLocation();

  // 🔥 details page detect
  const isDetailsPage = location.pathname.startsWith("/apps/");

  // 🔥 shared class logic
  const getClass = ({ isActive }) => {
    if (isDetailsPage) {
      return "btn text-black border-none"; // ❌ no active in details
    }

    return isActive
      ? "btn text-white bg-[#244D3F]"
      : "btn text-black border-none";
  };

  return (
    <div className="navbar bg-white border-b">

      {/* Logo */}
      <div className="flex-1">
        <h1 className="text-lg md:text-xl font-semibold">
          <span className="text-[#1F2937]">Keen</span>
          <span className="text-[#244D3F]">Keeper</span>
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-none gap-2">

        <NavLink to="/" className={getClass}>
          Home
        </NavLink>

        <NavLink to="/Apps" className={getClass}>
          Timeline
        </NavLink>

        <NavLink to="/InstalApps" className={getClass}>
          Stats
        </NavLink>

      </div>

    </div>
  );
};

export default Navber;