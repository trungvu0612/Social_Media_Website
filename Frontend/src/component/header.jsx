import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function Header() {
  const {
    authState: {
      user: { userName, userAvatar },
    },
  } = useContext(AuthContext);

  console.log(userAvatar);
  const avatar = userAvatar.data.data.toString("base64");

  console.log(avatar);

  return (
    <header className="header__main">
      <div className="container-fluid">
        <div className="logo">
          <a href="/home">
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
            <img
              src={`data:image/png;base64,${userAvatar}`}
              alt=""
              className="user__avatar"
            />
            <div className="user__name">
              <h2 className="user__name-title">{userName}</h2>
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
