import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";

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
        <h1 className="text-lg md:text-3xl font-bold">
          <span className="text-[#1F2937]">Keen</span>
          <span className="text-[#244D3F]">Keeper</span>
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-none gap-2">

        <NavLink to="/" className={getClass}>
          <IoMdHome />
          Home
        </NavLink>

        <NavLink to="/Apps" className={getClass}>
          <CiTimer />
          Timeline
        </NavLink>

        <NavLink to="/InstalApps" className={getClass}>
          <ImStatsDots />
          Stats
        </NavLink>

      </div>

    </div>
  );
};

export default Navber;