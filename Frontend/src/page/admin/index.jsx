import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

import Dashboard from "./component/dashboard";
import MusicPage from "./component/musicPage";
import Nav from "./component/nav";
import PostPage from "./component/postPage";

export default function Admin() {
  let { path } = useRouteMatch();

  return (
    <div className="admin">
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus" />
          <span className="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink exact to={`${path}/`} className="menuItem ">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}/musics`} className="menuItem">
              <i className="bx bx-music" />
              <span className="links_name">Musics</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}/posts`} className="menuItem">
              <i className="bx bxs-pencil" />
              <span className="links_name">Posts</span>
            </NavLink>
          </li>
          <li className="log_out">
            <NavLink to={"/"}>
              <i className="bx bx-log-out" />
              <span className="links_name">Log out</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <Nav />
        <Switch>
          {/* music page admin */}
          <Route path={`${path}/musics`} component={MusicPage} />
          {/* post page admin */}
          <Route path={`${path}/posts`} component={PostPage} />
          {/* dashboard page admin */}
          <Route exact path={`${path}/`} component={Dashboard} />
        </Switch>
      </section>
    </div>
  );
}
