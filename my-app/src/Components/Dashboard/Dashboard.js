import React from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h4> Dashboard</h4>
        <div>
          <Link to="/homepageadmin" className="dashboard-link">
            Home
          </Link>
          <br />
          <Link to="/form" className="dashboard-link">
            Form
          </Link>
          <br />
          <Link to="/userlist" className="dashboard-link">
            Users
          </Link>
          <br />
          <Link to="/" className="dashboard-link">
            Login
          </Link>
          <br />
          <Link to="/register" className="dashboard-link">
            Register
          </Link>
          <br />

          <button onClick={handleLogout} className="dashboard-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
