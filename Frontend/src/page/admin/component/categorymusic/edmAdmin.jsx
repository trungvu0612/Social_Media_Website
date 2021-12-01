import React, { useContext, useEffect } from "react";
import ListMusicAdmin from "./listMusicAdmin";
import { MusicContext } from "../../../../contexts/musicContext";
import Ripple from "@bit/joshk.react-spinners-css.ripple";

export default function EdmAdmin() {
  const {
    musicState: { music, musics, musicsLoading },
    getMusics,
  } = useContext(MusicContext);
  // start get all musics
  useEffect(() => getMusics(), []);

  const getCategory = musics.filter((music) => {
    return music.musicCategory == "edm";
  });

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
      <div className="category__music edm">
        {getCategory.map((music) => (
          <ListMusicAdmin music={music} />
        ))}
      </div>
    );
  }
}
