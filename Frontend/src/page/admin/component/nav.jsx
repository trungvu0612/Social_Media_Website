import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

export default function Nav() {
  const {
    authState: {
      user: { userName, userAvatar },
    },
  } = useContext(AuthContext);
  console.log(userAvatar);
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
        <img src={userAvatar} alt="" />
        <span className="admin_name">{userName}</span>
      </div>
    </nav>
  );
}
