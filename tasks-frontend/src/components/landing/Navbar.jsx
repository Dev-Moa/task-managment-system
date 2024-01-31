import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar bg-base-100 mt-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Task Master</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a className="no-underline">Home</a>
          </li>
         
          <li>
            <Link to={'/register'}>Register </Link>
          </li>
          <li>
            <Link to={'/login'}>Login </Link>
          </li>
         
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
