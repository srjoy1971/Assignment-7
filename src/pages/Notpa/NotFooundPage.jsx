import React from "react";
import { Link } from "react-router-dom";

const NotFooundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="text-center max-w-md">

        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-[#244D3F]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-lg shadow-md hover:bg-[#1d3b31] transition"
        >
          ⬅ Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default NotFooundPage;