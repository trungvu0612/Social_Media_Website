import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { favoriteReducer } from "../reducers/favoriteReducer";
import {
  apiUrl,
  DELETE_FAVORITE,
  FAVORITES_LOADED_FAIL,
  FAVORITES_LOADED_SUCCESS,
  FAVORITE_CLICK,
} from "./constants";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  // State
  const [favoriteState, dispatch] = useReducer(favoriteReducer, {
    favoriteHome: {},
    favorite: {},
    favorites: [],
    favoritesLoading: true,
  });

  const favoriteFirst =
    favoriteState.favorites[favoriteState.favorites.length - 1];

  // Get all favorites
  const getFavorites = async () => {
    try {
      const response = await axios.get(`${apiUrl}/favorites/datafavorites`);
      if (response.data.success) {
        dispatch({
          type: FAVORITES_LOADED_SUCCESS,
          payload: response.data.favorites,
        });
      }
    } catch (error) {
      dispatch({ type: FAVORITES_LOADED_FAIL });
    }
  };

  //   // Find id favorite when user is updating favorite
  //   const findIDFavorite = (favoriteId) => {
  //     const favorite = favoriteState.favorites.find(
  //       (favorite) => favorite._id === favoriteId
  //     );
  //     dispatch({ type: FAVORITE_CLICK, payload: favorite });
  //   };

  // useEffect(() => getFavorites(), []);
  // // Find id favorite when user click play favorite
  // const getIdFavoriteHome = (favoriteIdHome) => {
  //   const favoriteGet = favoriteState.favorites.find(
  //     (favorite) => favorite._id === favoriteIdHome
  //   );
  //   dispatch({
  //     type: FAVORITE_CLICK_HOME,
  //     payload: favoriteGet,
  //   });
  // };
  // Delete favorite
  const deleteFavorite = async (favoriteId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/favorites/delete/${favoriteId}`
      );
      if (response.data.success)
        dispatch({ type: DELETE_FAVORITE, payload: favoriteId });
    } catch (error) {
      console.log(error);
    }
  };

  // favorite context data
  const favoriteContextData = {
    favoriteState,
    getFavorites,
    // findIDFavorite,
    // getIdFavoriteHome,
    favoriteFirst,
    deleteFavorite,
  };
  return (
    <FavoriteContext.Provider value={favoriteContextData}>
      {" "}
      {children}{" "}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
