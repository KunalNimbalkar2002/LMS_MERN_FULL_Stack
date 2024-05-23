import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import LoginPage from "../Authentication/LoginPage/LoginPage";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h4> Dashboard</h4>
        <div>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
