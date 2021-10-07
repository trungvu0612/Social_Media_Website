import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../contexts/authContext";
import Ripple from "@bit/joshk.react-spinners-css.ripple";
import jwt_decode from "jwt-decode";
import { LOCAL_STORAGE_TOKEN_NAME } from "../../contexts/constants";
import Home from "../../page/home";
import Admin from "../../page/admin";

const ProtectAdmin = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  const decoded = jwt_decode(localStorage[LOCAL_STORAGE_TOKEN_NAME]);

  console.log(decoded.userId);
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
        />
        ;
      </div>
    );
  } else if (decoded == "615aec345fc2f09a8cb4c688") {
    console.log(123);
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...rest} {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectAdmin;
