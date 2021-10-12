export const apiUrl =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:5000/api" :
    "https://sleepy-inlet-56101.herokuapp.com/api";

export const apiUpload =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:5000/uploadFile/" :
    "https://sleepy-inlet-56101.herokuapp.com/api";

export const LOCAL_STORAGE_TOKEN_NAME = "social-media-web";

export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";
export const POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const FIND_POST = "FIND_POST";