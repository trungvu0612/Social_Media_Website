import React from "react";

export default function Header() {
  return (
    <header className="header__main">
      <div className="container-fluid">
        <div className="logo">
          <a href="/admin.html">
            <img src="/img/logo1.svg" alt="" />
          </a>
        </div>
        <div className="search">
          <i className="search-icon fa fa-search" />
          <input
            type="text"
            inputMode="search"
            placeholder="Search for song, arties etc..."
            className="search-input"
          />
        </div>
        <div className="right">
          <div className="user">
            <img src="/img/avartar.jpg" alt="" className="user__avatar" />
            <div className="user__name">
              <h2 className="user__name-title">Trung Vũ</h2>
            </div>
          </div>
          <div id="notiBtn">
            <i className="fa fa-bell tool-icon" />
          </div>
          <a href="#" className="btn1">
            Log out
          </a>
        </div>
      </div>
    </header>
  );
}
