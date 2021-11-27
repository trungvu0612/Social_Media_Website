import React, { useState } from "react";

export default function Music() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  console.log(musicPlaying);
  function playMusic() {
    const urlMusic = document.querySelector(".progress__song");
    if (!musicPlaying) {
      urlMusic.play();
      setMusicPlaying(!musicPlaying);
    } else {
      urlMusic.pause();
      setMusicPlaying(!musicPlaying);
    }
  }

  return (
    <section className="music">
      <div className="music__title">
        <h4>Music is playing</h4>
      </div>
      <div className="music__audio">
        <div className="music__audio-postcard">
          <div className="player">
            <img src="/img/img_music/2.jpg" className="player__img" alt="" />
          </div>
          <h4 className="player-title tilte">EDM</h4>
          <span className="player-author author">Trung Vũ</span>
          <div className="progress">
            <input
              id="progress__input"
              type="range"
              defaultValue={0}
              step={1}
              min={0}
              max={100}
            />
            <audio src="/music/edm.mp3" className=" progress__song" />
            {/* <span id="progress__time">0</span> */}
          </div>
        </div>
        <div className="music__audio-btn">
          <i className="fa fa-backward player-prev" />
          <i onClick={playMusic} className="fa fa-play player-play" />
          <i className="fa fa-forward player-next" />
        </div>
      </div>
    </section>
  );
}
