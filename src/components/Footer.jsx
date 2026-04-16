import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-10">

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">

        {/* Logo + Description */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">KeenKeeper</h1>

          <p className="text-sm text-gray-200 mt-2">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <a className="btn btn-circle bg-white border-none"> <FaInstagram /></a>
            <a className="btn btn-circle bg-white border-none"> <IoLogoFacebook /></a>
            <a className="btn btn-circle bg-white border-none"><FaXTwitter /></a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-xs text-gray-300 flex flex-col md:flex-row gap-[350px] items-center">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookies</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;