import React from "react";

export default function PostEdit() {
  return (
    <div className="postedit post-list post-list-2">
      <div className="post__items">
        <h3 className="title">Edit personal information</h3>
        <div className="left-right">
          <div className="left">
            <div className="left__items">
              <h4>Name</h4>
            </div>
            <div className="left__items">
              <h4>Avatar</h4>
            </div>
            <div className="left__items">
              <h4>Phone number</h4>
            </div>
            <div className="left__items">
              <h4>Age</h4>
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
              <div className="right__items file-right">
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
                <input
                  className="input_info"
                  type="text"
                  placeholder="enter your new age"
                />
              </div>
            </div>
            <div className="submit">
              <button type="submit" className="submit__btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
