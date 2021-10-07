import React from "react";

import CategoryMusicAdmin from "./categoryMusicAdmin";
import PopupMusic from "./popupMusic";

export default function MusicPage() {
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
            <form action>
              <div className="right">
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new name"
                  />
                </div>
                <div className="right__items">
                  <input type="file" />
                </div>
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new phone"
                  />
                </div>
                <div className="right__items">
                  <input type="file" />
                </div>
                <div className="right__items checkbox">
                  <div className="checkbox">
                    <div className="checkbox__item">
                      <input type="checkbox" id="Acoustic/Fork" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Acoustic/Fork">Acoustic/Fork</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Cinematic" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Cinematic">Cinematic</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Pop" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Pop">Pop</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Electronic" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Electronic">Electronic</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Urban/groove" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Urban/groove">Urban/groove</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Jazz" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Jazz">Jazz</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="Rock" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="Rock">Rock</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="World/orthers" />
                      <i className="bx bxs-check-circle" />
                      <label htmlFor="World/orthers">World/orthers</label>
                    </div>
                    <div className="checkbox__item">
                      <input type="checkbox" id="EDM" />
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
