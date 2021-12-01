import React, { useContext } from "react";
import {
  apiUploadFileMp3,
  apiUploadImgMp3,
} from "../../../../contexts/constants";
import { MusicContext } from "../../../../contexts/musicContext";
import PopupMusic from "./popupMusic";

export default function ListMusicAdmin({
  music: { _id, musicName, musicAuthor, musicImg, musicFile },
}) {
  function editMussic() {
    const popUpEdit = document.querySelector(".edit-popup");
    popUpEdit.classList.add("active");
  }

  return (
    <div className="like">
      <img className="img" src={`${apiUploadImgMp3}${musicImg}`} alt="" />
      <h5 className="name">{musicName}</h5>
      <h5 className="author">{musicAuthor}</h5>
      <audio className="audio" src={`${apiUploadFileMp3}${musicFile}`} />
      <button className="item-create edit" onClick={editMussic}>
        Edit
      </button>
      <PopupMusic musicdata={_id} />
    </div>
  );
}
