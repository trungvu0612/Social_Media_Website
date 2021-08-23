import React from "react";

export default function PopupMusic() {
  return (
    <div className="edit-popup">
      <div className="post__items">
        <div id="outbtn">X</div>
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
                  <select>
                    <option value="Acoustic/Fork">Acoustic/Fork</option>
                    <option value="Cinematic">Cinematic</option>
                    <option value="Pop">Pop</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Urban/groove">Urban/groove</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Rock">Rock</option>
                    <option value="World/orthers">World/orthers</option>
                    <option value="EDM">EDM</option>
                  </select>
                </div>
              </div>
              <div className="submit">
                <input
                  type="submit"
                  className="submit__btn"
                  defaultValue="Upload"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
