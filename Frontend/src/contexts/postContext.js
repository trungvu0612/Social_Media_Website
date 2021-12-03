import axios from "axios";
import { createContext, useReducer } from "react";
import {
  apiPost,
  apiUrl,
  DELETE_POST,
  POSTS_LOADED_FAIL,
  POSTS_LOADED_SUCCESS,
  POST_CLICK,
  UPDATE_MUSIC,
} from "../contexts/constants";
import { postReducer } from "../reducers/postReducer";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  // State
  const [postState, dispatch] = useReducer(postReducer, {
    post: {},
    posts: [],
    postsLoading: true,
  });

  // Get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiPost}/datapost`);
      if (response.data.success) {
        dispatch({
          type: POSTS_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({ type: POSTS_LOADED_FAIL });
    }
  };

  // get id posts
  const findIDPost = (postId) => {
    const post = postState.posts.find((post) => post._id === postId);
    dispatch({ type: POST_CLICK, payload: post });
  };

  // Delete post
  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`${apiUrl}/posts/delete/${postId}`);
      if (response.data.success)
        dispatch({ type: DELETE_POST, payload: postId });
    } catch (error) {
      console.log(error);
    }
  };

  // post context data
  const postContextData = {
    postState,
    getPosts,
    deletePost,
    findIDPost,
  };
  return (
    <PostContext.Provider value={postContextData}>
      {" "}
      {children}{" "}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
