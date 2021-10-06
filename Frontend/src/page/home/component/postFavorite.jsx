import React from "react";
import CheckRedirect from "../../../hook/checkRedirect";

export default function PostFavorite() {
  CheckRedirect();
  return (
    <div className="postfavrorite post-list post-list-3">
      <div className="post__items">
        <div className="favorites">
          <h3 className="title">My favorite playlist</h3>
          <div className="like">
            <img
              src="/img/img_music/khong_loi/acoustic/buddy.jpg"
              className="img"
              alt=""
            />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
            <audio
              className="audio"
              src="/music/khong_loi/acoustic/bensound-buddy.mp3"
            />
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
            <audio
              className="audio"
              src="/music/khong_loi/acoustic/bensound-cute.mp3"
            />
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
            <audio
              className="audio"
              src="/music/khong_loi/acoustic/bensound-buddy.mp3"
            />
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
            <audio
              className="audio"
              src="/music/khong_loi/acoustic/bensound-buddy.mp3"
            />
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
          </div>
          <div className="like">
            <img src="/img/img_music/2.jpg" className="img" alt="" />
            <h4 className="name">EDM</h4>
            <h4 className="author">Chưa biết tên</h4>
            <time className="time">2:46</time>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
