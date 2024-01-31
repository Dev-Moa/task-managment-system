import React from "react";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Sidebar() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <div className="flex flex-col">
      <li className="mt-4">
        <h1>
          
          Task Master
        </h1>
      </li>

      <li className="mt-8">
        <Link to={"/app"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/app/add_task"}>Add Task</Link>
      </li>
      <li>
        <Link to={"/app/list_task"}>List Tasks</Link>
      </li>
      <li>
        <button onClick={logout}>Sign Out</button>
      </li>
    </div>
  );
}

export default Sidebar;
