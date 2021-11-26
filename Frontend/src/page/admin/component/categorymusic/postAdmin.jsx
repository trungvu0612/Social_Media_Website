import React from "react";
import { apiUpload, apiUploadImgMp3 } from "../../../../contexts/constants";

export default function PostAdmin({
  post: {
    user: { userName, userAvatar },
    postContent,
    music: { musicName, musicImg, musicAuthor },
  },
}) {
  return (
    <div className="post-list">
      <div className="owner">
        <img src={`${apiUpload}${userAvatar}`} alt="" />
        <a href="#">{userName}</a>
      </div>
      <div className="contents">
        <span className="content">{postContent}</span>
      </div>
      <div className="like">
        <img src={`${apiUploadImgMp3}${musicImg}`} className="img" alt="" />
        <h4 className="name">{musicName}</h4>
        <h4 className="author">{musicAuthor}</h4>
      </div>
      <button className="submit__btn">Delete</button>
    </div>
  );
}
