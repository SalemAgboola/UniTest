import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "./images/ProfileIcon1.png";
import historyIcon from "./images/HistoryIcon1.png";
import logo from "./images/logo2.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <img
          src={logo}
          alt="Toggle Sidebar"
          className={`sidebar-logo ${isCollapsed ? "collapsed" : ""}`}
        />
      </button>
      <ul className="menu">
          <Link to="/profile" className="menu-link">
            <img src={profileIcon} alt="Profile" className="menu-icon" />
            {!isCollapsed && <span>Profile</span>}
          </Link>
          <Link to="/history" className="menu-link">
            <img src={historyIcon} alt="History" className="menu-icon" />
            {!isCollapsed && <span>History</span>}
          </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
