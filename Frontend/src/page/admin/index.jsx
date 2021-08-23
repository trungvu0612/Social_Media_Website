import React from "react";
import MusicPage from "./component/musicPage";
import Nav from "./component/nav";
import OverviewBoxes from "./component/overviewBoxes";
import PostPage from "./component/postPage";
import SaleBox from "./component/saleBox";
import SideBar from "./component/sideBar";

export default function Admin() {
  return (
    <div className="admin">
      <SideBar />
      <section className="home-section">
        <Nav />
        {/* dashboard page admin */}
        <div className="home-content menu-bar active">
          <OverviewBoxes />
          <SaleBox />
        </div>
        {/* music page admin */}
        <MusicPage />
        {/* post page admin */}
        <PostPage />
      </section>
    </div>
  );
}
