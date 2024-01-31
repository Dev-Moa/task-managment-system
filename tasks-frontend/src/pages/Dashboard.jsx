import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
function dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-6">Task Managment System </h1>
      <h2 className="text-3xl font-bold my-6">Group team Project</h2>
      <div className="flex flex-wrap gap-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>Mohamed Suleymaan </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>Yuusuf Hussein Dahir</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>Abdikadir Duceysane</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img4}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>Mohamed Shariif Mohamed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
