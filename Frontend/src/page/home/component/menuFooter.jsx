import React from "react";

export default function MenuFooter() {
  return (
    <section className="menu-footer">
      <div className="menu__list">
        <h3 className="menu__list-title">Menu</h3>
        <ul className="menu__list-items">
          <li className="item">
            <div className="item__option active">
              <i className="fa fa-home" />
              <span>Home page</span>
            </div>
          </li>
          <li className="item">
            <div href="#" className="item__option">
              <i className="fa fa-user-circle-o" />
              <span>My personal page</span>
            </div>
          </li>
          <li className="item">
            <div href="#" className="item__option">
              <i className="fa fa-pencil" />
              <span>Edit personal information</span>
            </div>
          </li>
          <li className="item">
            <div href="#" className="item__option">
              <i className="fa fa-heart-o" />
              <span>My favorite playlist</span>
            </div>
          </li>
          <li className="item">
            <div href="#" className="item__option">
              <i className="fa fa-plus" />
              <span>Create post</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
