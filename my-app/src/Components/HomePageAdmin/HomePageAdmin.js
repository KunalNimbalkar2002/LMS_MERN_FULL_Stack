import React from "react";
import "./HomePageAdmin.css";

const HomePageAdmin = () => {
  return (
    <div>
      <div className="admin-home">
        <div className="welcome-message">
          <h2>Welcome, admin name!</h2>
          <p>Here's a quick overview of your admin dashboard.</p>
        </div>
        <div className="stats-overview">
          <h3>Quick Stats Overview</h3>
          <ul>
            {(stat, index) => (
              <li key={index}>
                <strong>{stat.label}:</strong> {stat.value}
              </li>
            )}
          </ul>
        </div>
        <div className="navigation-menu">
          <h3>Navigation Menu</h3>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Products</li>
            <li>Orders</li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>{(activity, index) => <li key={index}>{activity}</li>}</ul>
        </div>
        <div className="notification-panel">
          <h3>Notifications</h3>
          <ul>
            {(notification, index) => <li key={index}>{notification}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;
