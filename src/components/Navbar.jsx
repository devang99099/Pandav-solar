import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-black shadow-md">
      <div className="max-w-[1800px] items-center h-15 max-lg:hidden mx-auto">
        <ul className="flex justify-between items-center max-lg:flex-col max-lg:items-start h-full px-4 sm:px-6 lg:px-8 max-lg:py-4  ">
          <li className="text-white text-lg items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <IoIosMailUnread className="max-lg:text-2xl" />
              info@pandavsolar.in
            </NavLink>
          </li>
          <li className="text-white text-lg">
            <NavLink to="/" className={"flex items-center gap-2"}>
              <MdCall className="max-lg:text-2xl" /> +91 70692 16551
            </NavLink>
          </li>
          <li className="text-white text-lg">
            <NavLink to="/" className={"flex items-center gap-2"}>
              <FiClock className="max-lg:text-2xl" /> Mon - Sat 09AM - 7PM,
              Sunday - 9AM - 1PM
            </NavLink>
          </li>
          <li className="text-white text-lg flex items-center gap-4 pr-4 max-lg:text-xl max:lg:mt-4">
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
