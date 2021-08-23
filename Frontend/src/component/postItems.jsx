import React from "react";
import Comment from "./comment";

export default function PostItems({
  owneravatar,
  postowner,
  content,
  imgmusic,
  namemusic,
  authormusic,
  linkmusic,
}) {
  return (
    <div className="post__items">
      <div className="owner">
        <img src={owneravatar} alt="" />
        <a href="#">{postowner}</a>
      </div>
      <div className="contents">
        <span className="content">{content}</span>
      </div>
      <div className="like">
        <img src={imgmusic} className="img" alt="" />
        <h4 className="name">{namemusic}</h4>
        <h4 className="author">{authormusic}</h4>
        <a href="#">
          <i className="fa fa-heart" />
        </a>
        <audio className="audio" src={linkmusic} />
      </div>
      <Comment />
    </div>
  );
}
