import React from "react";

export default function Cinematic() {
  return (
    <div className="category__music cinematic">
      <div className="like">
        <img
          className="img"
          src="/img/img_music/khong_loi/acoustic/cute.jpg"
          alt=""
        />
        <h5 className="name">Breeze</h5>
        <h5 className="author">Benjamin Tissot </h5>
        <audio
          className="audio"
          src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
        />
        <button className="item-create">Create post</button>
        <button className="item-create">Download</button>
      </div>
      <div className="like">
        <img
          className="img"
          src="/img/img_music/khong_loi/acoustic/acousticbreeze.jpg"
          alt=""
        />
        <h5 className="name">Breeze</h5>
        <h5 className="author">Benjamin Tissot </h5>
        <audio
          className="audio"
          src="/music/khong_loi/acoustic/bensound-acousticbreeze.mp3"
        />
        <button className="item-create">Create post</button>
        <button className="item-create">Download</button>
      </div>
    </div>
  );
}
