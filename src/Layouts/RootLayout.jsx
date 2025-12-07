import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="bg-[#EAECED]">
      <div className="max-w-7xl mx-auto p-4">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
