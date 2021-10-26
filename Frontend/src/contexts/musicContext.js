import axios from "axios";
import { createContext, useReducer } from "react";
import { musicReducer } from "../reducers/musicReducer";
import { apiUrl, MUSICS_LOADED_FAIL, MUSICS_LOADED_SUCCESS } from "./constants";

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  // State
  const [musicState, dispatch] = useReducer(musicReducer, {
    music: null,
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

  // music context data
  const musicContextData = {
    musicState,
    getMusics,
  };
  return (
    <MusicContext.Provider value={musicContextData}>
      {" "}
      {children}{" "}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
