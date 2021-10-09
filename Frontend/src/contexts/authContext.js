import { createContext, useReducer, useEffect, useContext } from "react";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import axios from "axios";
import setAuthToken from "./setAuthToken";
import { useHistory } from "react-router";

// create context
export const AuthContext = createContext();

// use useReducer manage the state of the web
const AuthContextProvider = ({ children }) => {
  // This object = first state on authReducer
  const [authState, dispatch] = useReducer(authReducer, {
    // when the user is not logged in to the web
    authLoading: true,
    //  the user is not authenticated
    isAuthenticated: false,
    // without any user information
    user: null,
  });

  // Authenticate user
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(`${apiUrl}/auth`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: { isAuthenticated: true, user: response.data.user },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => loadUser(), []);

  // Login
  const loginUser = async (userForm) => {
    try {
      // Send req for sever
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);
      // if successful, return accessToken
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      await loadUser();
      // return response user data
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Register
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Logout
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: null },
    });
  };

  // Context data
  const authContextData = {
    loginUser,
    registerUser,
    logoutUser,
    authState,
  };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
