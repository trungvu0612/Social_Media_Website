import axios from "axios";
import React, { useContext, useState } from "react";
import { ADD_MUSIC, apiUrl } from "../../../contexts/constants";
import { MusicContext } from "../../../contexts/musicContext";

import CategoryMusicAdmin from "./categoryMusicAdmin";
import PopupMusic from "./popupMusic";

export default function MusicPage() {
  const { dispatch } = useContext(MusicContext);

  // local state
  const [uploadMusic, setuploadMusic] = useState({
    musicName: "",
    musicAuthor: "",
    musicImg: "",
    musicFile: "",
    musicCategory: "",
  });

  // //Router
  // const history = useHistory();

  // get data as user input
  const onChangeMusicForm = function (event) {
    setuploadMusic({ ...uploadMusic, [event.target.name]: event.target.value });
    console.log(uploadMusic);
  };

  //get img file as user input
  const onChangeFileImgForm = function (event) {
    setuploadMusic({ ...uploadMusic, musicImg: event.target.files[0] });
  };
  console.log(uploadMusic.musicImg);
  //get mp3 file as user input
  const onChangeMp3Form = function (event) {
    setuploadMusic({ ...uploadMusic, musicFile: event.target.files[0] });
  };

  // handle submit event in form with axios
  const musicUploadForm = (e) => {
    e.preventDefault();

    // initialize formdata to store values in state and assign those values to name in input
    const formData = new FormData();
    formData.append("musicName", uploadMusic.musicName);
    formData.append("musicAuthor", uploadMusic.musicAuthor);
    formData.append("musicImg", uploadMusic.musicImg);
    formData.append("musicFile", uploadMusic.musicFile);
    formData.append("musicCategory", uploadMusic.musicCategory);

    axios
      .post(`${apiUrl}/music/upload`, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          dispatch({ type: ADD_MUSIC, payload: response.data.post });

          return response.data;
        }
        if (!response.success) {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) return error.response;
        else return { success: false, message: error.message };
      });
  };

  return (
    <div className="music-content menu-bar">
      <div className="overview-boxes">
        <div className="post__items">
          <h3 className="title">Upload music</h3>
          <div className="left-right">
            <div className="left">
              <div className="left__items">
                <h4>Name Music</h4>
              </div>
              <div className="left__items">
                <h4>Image</h4>
              </div>
              <div className="left__items">
                <h4>Author</h4>
              </div>
              <div className="left__items">
                <h4>Link</h4>
              </div>
              <div className="left__items">
                <h4>Category</h4>
              </div>
            </div>
            <form onSubmit={musicUploadForm} enctype="multipart/form-data">
              <div className="right">
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter the name of the song"
                    name="musicName"
                    value={uploadMusic.musicName}
                    onChange={onChangeMusicForm}
                  />
                </div>
                <div className="right__items">
                  <input
                    type="file"
                    name="musicImg"
                    onChange={onChangeFileImgForm}
                  />
                </div>
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new phone"
                    name="musicAuthor"
                    value={uploadMusic.musicAuthor}
                    onChange={onChangeMusicForm}
                  />
                </div>
                <div className="right__items">
                  <input
                    type="file"
                    name="musicFile"
                    onChange={onChangeMp3Form}
                  />
                </div>
                <div className="right__items checkbox">
                  <div className="checkbox">
                    <div className="checkbox__item">
                      <input type="radio" id="Acoustic/Fork" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Acoustic/Fork">Acoustic/Fork</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="Cinematic" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Cinematic">Cinematic</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="Pop" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Pop">Pop</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="Electronic" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Electronic">Electronic</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="Urban/groove" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Urban/groove">Urban/groove</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="Jazz" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Jazz">Jazz</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="Rock" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Rock">Rock</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="World/orthers" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="World/orthers">World/orthers</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="radio" id="EDM" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="EDM">EDM</label>
                    </div>
                  </div>
                </div>
                <div className="submit">
                  <input
                    type="submit"
                    className="submit__btn"
                    value="Add"
                    defaultValue="Upload"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="overview-boxes">
        <CategoryMusicAdmin />
      </div>
      <PopupMusic />
    </div>
  );
}
