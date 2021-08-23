import React from "react";

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
      <div className="comment">
        <form action>
          <input
            className="comment-input"
            type="text"
            placeholder="write a comment"
          />
          <button className="comment-btn">Comment</button>
        </form>
        <div className="comment__list">
          <div className="comment__list-item">
            <img className="avt" src="/img/avartar.jpg" alt="" />
            <div className="name-cmt">
              <span className="cmt-name">Trung Vũ</span>
              <div className="cmt-list">Rất hay</div>
            </div>
          </div>
        </div>
        <div className="comment__list">
          <div className="comment__list-item">
            <img className="avt" src="/img/avartar.jpg" alt="" />
            <div className="name-cmt">
              <span className="cmt-name">Tấn Sang</span>
              <div className="cmt-list">
                Hãy nhớ rằng, đó không phải là nội dung của bạn. Nó thậm chí
                không phải là nội dung của SoundCloud.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
