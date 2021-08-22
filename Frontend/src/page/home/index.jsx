import React from "react";
import Header from "../../component/header";
import Notification from "../../component/notification";
import MenuFooter from "./component/menuFooter";
import MenuMain from "./component/menuMain";
import MusicFooter from "./component/musicFooter";
import MusicPopup from "./component/musicPopup";
import PostCreate from "./component/postCreate";
import PostDisplay from "./component/postDisplay";
import PostEdit from "./component/postEdit";
import Music from "./component/music";
import PostFavorite from "./component/postFavorite";
import PostPerson from "./component/postPerson";

export default function Home() {
  return (
    <div className="home">
      <Header />
      {/* thông báo người dùng */}
      <Notification />
      {/* main */}
      <main className="main">
        <div className="container-fluid">
          <MenuMain />
          <section className="post">
            {/* home page */}
            <PostDisplay />
            {/* my personal page */}
            <PostPerson />
            {/* edit information */}
            <PostEdit />
            {/* my favorite page */}
            <PostFavorite />
            {/* create page */}
            <PostCreate />
          </section>
          {/* Music */}
          <Music />
          {/* section music for table, smart phone */}
          <MusicFooter />
          <MenuFooter />
          <MusicPopup />
        </div>
      </main>
    </div>
  );
}
