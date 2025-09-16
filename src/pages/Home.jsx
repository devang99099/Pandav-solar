import React from "react";
import solarBg from "../assets/solar-bg.jpg";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${solarBg})` }}
    >
      <div className="max-w-[1920px] w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="py-6 max-w-4xl text-start">
          <h1 className="text-blue-500 text-7xl font-bold mb-4 leading-tight space-x-2">
            WELCOME TO PANDAV SOLAR
          </h1>
        </div>

        <div className=" max-w-4xl text-start">
          <p className="text-black font-semibold text-2xl mb-8 leading-[1.7]">
            Harness the Power of the Sun with Our Cutting-Edge Solar Solutions
            Tailored for Your Home and Business Needs.
          </p>

          <div className="flex space-x-13 font-medium">
            <NavLink to="/about">
              <button className="group bg-blue-500 text-white px-12 text-xl py-4 rounded hover:bg-blue-600 transition flex items-center gap-2">
                About Us
                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </NavLink>

            <NavLink to="/services">
              <button className="group bg-black text-white px-12 text-xl py-4 rounded  transition flex items-center gap-2">
                Our Services
                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
