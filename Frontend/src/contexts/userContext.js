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
  // Update post
  //   const updateUser = async (updatedUser) => {
  //     try {
  //       const response = await axios.put(
  //         `${apiUrl}/update/user/${updatedUser._id}`,
  //         updatedUser
  //       );

  //     } catch (error) {

  //     }
  //   };

  // user context data
  const userContextData = {
    userState,
    // updateUser,
  };
  return (
    <UserContext.Provider value={userContextData}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
