import React from "react";
import { apiUploadFileMp3, apiUploadImgMp3 } from "../../contexts/constants";

export default function ListMusic({
  music: { musicName, musicAuthor, musicImg, musicFile },
}) {
  return (
    <div className="like">
      <img className="img" src={`${apiUploadImgMp3}${musicImg}`} alt="" />
      <h5 className="name">{musicName}</h5>
      <h5 className="author">{musicAuthor}</h5>
      <audio className="audio" src={`${apiUploadFileMp3}${musicFile}`} />
      <button className="item-create">Create post</button>
      <button className="item-create">Download</button>
    </div>
  );
}
