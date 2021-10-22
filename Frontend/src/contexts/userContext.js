import axios from "axios";
import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import { apiUrl, UPDATE_USER } from "./constants";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // State
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
    users: [],
    usersLoading: true,
  });

  // user context data
  const userContextData = {
    userState,
  };
  return (
    <UserContext.Provider value={userContextData}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
