import React, { useContext, useEffect, useState } from "react";
import {
  apiUpload,
  apiUploadFileMp3,
  apiUploadImgMp3,
} from "../contexts/constants";
import { Link } from "react-router-dom";
import { MusicContext } from "../contexts/musicContext";

export default function PostItems({
  post: {
    user: { userName, userAvatar },
    postContent,
    music: { _id, musicName, musicImg, musicAuthor, musicFile },
  },
}) {
  // set  music state at MusicContext to data music selected
  const { getIdMusicHome } = useContext(MusicContext);
  const getMusicSelected = (music) => {
    getIdMusicHome(music);
    console.log(music);
  };

  // get data form music state
  // const {
  //   musicState: {
  //     music: { musicFile: musicUrl },
  //   },
  // } = useContext(MusicContext);

  // console.log(musicUrl);
  return (
    <div className="post__items">
      <div className="owner">
        <img src={`${apiUpload}${userAvatar}`} alt="" />
        <a href="#">{userName}</a>
      </div>
      <div className="contents">
        <span className="content">{postContent}</span>
      </div>
      <div onClick={getMusicSelected.bind(this, _id)} className="like">
        <img src={`${apiUploadImgMp3}${musicImg}`} className="img" alt="" />
        <h4 className="name">{musicName}</h4>
        <h4 className="author">{musicAuthor}</h4>
        <a href="#">
          <i className="fa fa-heart" />
        </a>
        <audio className="audio" src={`${apiUploadFileMp3}${musicFile}`} />
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
