import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../contexts/authContext";
import Ripple from "@bit/joshk.react-spinners-css.ripple";
import jwt_decode from "jwt-decode";
import { LOCAL_STORAGE_TOKEN_NAME } from "../../contexts/constants";
import Header from "../header";

const CheckRedirect = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return (
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <Ripple
          style={{
            top: "50%",
            left: "50%",
            position: "relative",
            transform: "translate(-50%, -50%)",
          }}
          color="#be97e8"
        />{" "}
        ;{" "}
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...rest} {...props} />{" "}
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default CheckRedirect;
