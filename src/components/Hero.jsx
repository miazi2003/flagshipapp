import React from "react";
import BannerImg from "../assets/banner.png";
const Hero = () => {
  return (
    <div>
      <div className="py-12 w-[100%] mx-auto md:max-w-md ">
        <img className="w-full" src={BannerImg} alt="" />
        <div className="text-center py-4 gap-4 flex flex-col">
          <h1 className="font-thin text-5xl text-gray-900">
            Browse,Search,View,Buy
          </h1>
          <p className="text-gray-500">
            Best place to browse,search,view details and purchase of top
            flagship phones of the current time - FlagshipFaceOff{" "}
          </p>
        </div>
        <form className="flex flex-col md:flex-row items-start mb-4  w-full md:gap-2">
          <input
            type="text"
            placeholder="Search here ..."
            className="border border-gray-200 bg-white rounded shadow-md h-10 w-4/5 mb-3  pl-4 focus:outline-none focus:outline-shadow"
          />

          <button className="relative inline-block text-lg group cursor-pointer">
            <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-10 -mb-0.2 -mr-0.5 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
