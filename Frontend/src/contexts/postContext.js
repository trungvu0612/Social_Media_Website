import axios from "axios";
import { createContext, useReducer } from "react";
import {
  apiPost,
  POSTS_LOADED_FAIL,
  POSTS_LOADED_SUCCESS,
} from "../contexts/constants";
import { postReducer } from "../reducers/postReducer";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  // State
  const [postState, dispatch] = useReducer(postReducer, {
    post: null,
    posts: [],
    postsLoading: true,
  });

  // Get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiPost}/datapost`);
      if (response.data.success) {
        console.log(response.data.posts);
        dispatch({
          type: POSTS_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({ type: POSTS_LOADED_FAIL });
    }
  };

  // post context data
  const postContextData = {
    postState,
    getPosts,
  };
  return (
    <PostContext.Provider value={postContextData}>
      {" "}
      {children}{" "}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
