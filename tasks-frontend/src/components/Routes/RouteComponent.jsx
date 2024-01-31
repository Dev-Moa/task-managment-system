import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import Landing from "../../pages/landing";
import Dashboard from "../../pages/dashboard";
import React from "react";
import SharedLayout from "../layout/SharedLayout";
import AddTask from "../../pages/AddTask";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import Register from "../../pages/Register";
import ListTask from "../../pages/ListTask";

function RouteComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={
            <RequireAuth fallbackPath={"/login"}>
              <SharedLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/app/add_task" element={<AddTask />} />
          <Route path="/app/list_task" element={<ListTask />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default RouteComponent;
