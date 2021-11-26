import axios from "axios";
import { createContext, useReducer } from "react";
import { musicReducer } from "../reducers/musicReducer";
import {
  apiUrl,
  DELETE_MUSIC,
  MUSICS_LOADED_FAIL,
  MUSICS_LOADED_SUCCESS,
  MUSIC_CLICK,
} from "./constants";

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  // State
  const [musicState, dispatch] = useReducer(musicReducer, {
    music: {},
    musics: [],
    musicsLoading: true,
  });

  // Get all posts
  const getMusics = async () => {
    try {
      const response = await axios.get(`${apiUrl}/music`);
      if (response.data.success) {
        dispatch({
          type: MUSICS_LOADED_SUCCESS,
          payload: response.data.musics,
        });
      }
    } catch (error) {
      dispatch({ type: MUSICS_LOADED_FAIL });
    }
  };

  // Find id music when user is updating post
  const findIDMusic = (musicId) => {
    const music = musicState.musics.find((music) => music._id === musicId);
    dispatch({ type: MUSIC_CLICK, payload: music });
  };

  // music context data
  const musicContextData = {
    musicState,
    getMusics,
    findIDMusic,
  };
  return (
    <MusicContext.Provider value={musicContextData}>
      {" "}
      {children}{" "}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
