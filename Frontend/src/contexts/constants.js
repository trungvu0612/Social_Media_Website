export const apiUrl =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:5000/api" :
    "https://sleepy-inlet-56101.herokuapp.com/api";

export const apiUpload =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:5000/uploadFile/" :
    "https://sleepy-inlet-56101.herokuapp.com/api";

export const LOCAL_STORAGE_TOKEN_NAME = "social-media-web";
// music
export const MUSICS_LOADED_SUCCESS = "MUSICS_LOADED_SUCCESS";
export const ADD_MUSIC = "ADD_MUSIC";
export const DELETE_POST = "DELETE_POST";

// user
export const UPDATE_USER = "UPDATE_USER";
export const FIND_POST = "FIND_POST";
export const POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL";