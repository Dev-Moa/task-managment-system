import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero min-h-screen bg-base-100 -mt-12">
      <div className="hero-content text-center">
        <div >
          <h1 className="text-5xl font-bold">Effortlessly Manage Your Tasks with Task Master</h1>
          <p className="py-6">
          Your Ultimate Solution for Organizing and Tracking Everyday Tasks
          </p>
          <button className="btn btn-primary"> <Link to={'/register'}>Try It Free</Link>  </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
