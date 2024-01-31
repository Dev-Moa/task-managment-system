import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <div className=" sm:px-[15%]">
      {/* Navigation */}
      <Navbar/>
      

      {/* Hero Section */}
      <div className="">
        <Hero/>
      </div>

      {/* Features Section */}
      <div className="py-12 ">
        <Features/>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Landing;
