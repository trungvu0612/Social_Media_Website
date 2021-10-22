import { createContext, useReducer } from "react";
import { musicReducer } from "../reducers/musicReducer";

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  // State
  const [musicState, dispatch] = useReducer(musicReducer, {
    music: null,
    musics: [],
    musicsLoading: true,
  });

  // music context data
  const musicContextData = {
    musicState,
  };
  return (
    <MusicContext.Provider value={musicContextData}>
      {" "}
      {children}{" "}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
