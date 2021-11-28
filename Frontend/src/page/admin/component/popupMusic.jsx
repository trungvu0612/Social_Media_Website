import React, { useContext, useState } from "react";
import { MusicContext } from "../../../contexts/musicContext";

export default function PopupMusic() {
  // close popup
  function outPopupMusic() {
    const popUpEdit = document.querySelector(".edit-popup");
    popUpEdit.classList.remove("active");
  }

  // const {
  //   userState: { music, musics, musicsLoading },
  //   dispatch,
  // } = useContext(MusicContext);

  // // State
  // const [updatedUser, setUpdatedUser] = useState({
  //   musicName: "",
  //   musicAuthor: "",
  //   musicImg: "",
  //   musicFile: "",
  //   musicCategory: "",
  // });
  // // get data use enter in form
  // const onChangeUser = function (event) {
  //   setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  // };

  // // get image user enter in formData
  // const onChangeUserImg = function (event) {
  //   setUpdatedUser({ ...updatedUser, userAvatar: event.target.files[0] });
  // };

  // const onSubmitUpdate = function (event) {
  //   event.preventDefault();

  // initialize formdata to store values in state and assign those values to name in input
  //   const formData = new FormData();
  //   formData.append("userName", updatedUser.userName);
  //   formData.append("userPassword", updatedUser.userPassword);
  //   formData.append("confirmPassword", updatedUser.confirmPassword);
  //   formData.append("userAvatar", updatedUser.userAvatar);

  //   // get userID in local storage
  //   const decoded = jwt_decode(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
  //   if (updatedUser.userPassword == updatedUser.confirmPassword) {
  //     axios
  //       .put(`${apiUrl}/update/user/${decoded.userId}`, formData)
  //       .then((response) => {
  //         if (updatedUser.userPassword == updatedUser.confirmPassword) {
  //           console.log(response.data);
  //           if (response.data.success) {
  //             dispatch({ type: UPDATE_USER, payload: response.data.user });
  //             return response.data;
  //           }
  //         }
  //         alert("Passwords do not match");
  //       })
  //       .catch((error) => {
  //         return error.response
  //           ? error.response
  //           : { success: false, message: "Server error" };
  //       });
  //   } else {
  //     alert("Passwords do not match");
  //   }
  // };

  return (
    <div className="edit-popup">
      <div className="post__items">
        <div id="outbtn" onClick={outPopupMusic}>
          X
        </div>
        <h3 className="title">Update music</h3>
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
                  value="Save"
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
