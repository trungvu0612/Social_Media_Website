import React, { useContext, useEffect } from "react";
import { MusicContext } from "../../contexts/musicContext";
import ListMusic from "./listmusic";
import Ripple from "@bit/joshk.react-spinners-css.ripple";
export default function Rock() {
  const {
    musicState: { music, musics, musicsLoading },
    getMusics,
  } = useContext(MusicContext);
  // start get all musics
  useEffect(() => getMusics(), []);

  const getCategory = musics.filter((music) => {
    return music.musicCategory == "rock";
  });
  console.log(getCategory);

  if (musicsLoading) {
    return (
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <Ripple
          style={{
            top: "50%",
            left: "50%",
            position: "relative",
            transform: "translate(-50%, -50%)",
          }}
          color="#be97e8"
        />{" "}
        ;{" "}
      </div>
    );
  } else {
    return (
      <div className="category__music acoustic">
        {getCategory.map((music) => (
          <ListMusic music={music} key={music._id} />
        ))}
      </div>
    );
  }
}
