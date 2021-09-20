import React from "react";

export default function ListMusicAdmin({ img, name, author, src }) {
  function editMussic() {
    const popUpEdit = document.querySelector(".edit-popup");
    popUpEdit.classList.add("active");
  }

  return (
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
      <button className="item-create edit" onClick={editMussic}>
        Edit
      </button>
      <button className="item-create delete">Delete</button>
    </div>
  );
}
