import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const MainLayOut = () => {
  return (
    <div>
      <Navbar/>
      <div className=" min-h-screen">
        <div className="no max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16">
        <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayOut;
