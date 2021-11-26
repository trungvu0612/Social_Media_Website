// to make changes and repairs easier when everything is centralized here
export const api = "http://localhost:5000/";

// *** USER ***
// api auth user
export const apiUrl =
    process.env.NODE_ENV !== "production" ?
    `${api}api` :
    "https://sleepy-inlet-56101.herokuapp.com/api";

// access token
export const LOCAL_STORAGE_TOKEN_NAME = "social-media-web";

// user
export const UPDATE_USER = "UPDATE_USER";

// *** MUSIC ****
// api upload music
export const apiUpload =
    process.env.NODE_ENV !== "production" ?
    `${api}uploadFile/` :
    "https://sleepy-inlet-56101.herokuapp.com/api";

// api upload Image music
export const apiUploadImgMp3 =
    process.env.NODE_ENV !== "production" ?
    `${api}uploadFile/ImgMp3/` :
    "https://sleepy-inlet-56101.herokuapp.com/api";

// api upload File music
export const apiUploadFileMp3 =
    process.env.NODE_ENV !== "production" ?
    `${api}uploadFile/Mp3/` :
    "https://sleepy-inlet-56101.herokuapp.com/api";

// music
export const MUSICS_LOADED_SUCCESS = "MUSICS_LOADED_SUCCESS";
export const ADD_MUSIC = "ADD_MUSIC";
export const DELETE_MUSIC = "DELETE_MUSIC";
export const FIND_MUSIC = "FIND_MUSIC";
export const MUSICS_LOADED_FAIL = "MUSICS_LOADED_FAIL";
export const MUSIC_CLICK = "MUSIC_CLICK";

// *** POST ***
// api POST a new post to db
export const apiPost =
    process.env.NODE_ENV !== "production" ?
    `${api}api/posts` :
    "https://sleepy-inlet-56101.herokuapp.com/api";

// state post in context
export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";
export const ADD_POST = "ADD_POST";
export const FIND_POST = "FIND_POST";
export const POSTS_LOADED_FAIL = "MUSICS_LOADED_FAIL";