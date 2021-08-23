import React from "react";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus" />
        <span className="logo_name">CodingLab</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="menuItem active">
            <i className="bx bx-grid-alt" />
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className="menuItem">
            <i className="bx bx-music" />
            <span className="links_name">Musics</span>
          </a>
        </li>
        <li>
          <a href="#" className="menuItem">
            <i className="bx bxs-pencil" />
            <span className="links_name">Posts</span>
          </a>
        </li>
        <li className="log_out">
          <a href="#">
            <i className="bx bx-log-out" />
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
