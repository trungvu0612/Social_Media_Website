import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="sidebar-button">
        <i className="bx bx-menu sidebarBtn" />
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search" />
      </div>
      <div className="profile-details">
        <img src="/img/avartar.jpg" alt="" />
        <span className="admin_name">Prem Shahi</span>
      </div>
    </nav>
  );
}
