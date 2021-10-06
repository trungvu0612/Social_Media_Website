import Marketing from "./page/marketing";
import "../src/assets/scss/style.scss";
import Admin from "./page/admin";
import AdminLogin from "./page/admin-login";
import Home from "./page/home";
import Login from "./page/login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./page/register";
import AuthContextProvider, { AuthContext } from "./contexts/authContext";
import { useContext } from "react";
import setAuthToken from "./contexts/setAuthToken";

function App() {
  return (
    <AuthContextProvider>
      {" "}
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Marketing} />{" "}
            <Route path="/login" component={Login} />{" "}
            <Route path="/register" component={Register} />{" "}
            <Route path="/home" component={Home} />{" "}
            <Route path="/login-admin" component={AdminLogin} />{" "}
            <Route path="/admin" component={Admin} />{" "}
          </Switch>{" "}
        </div>{" "}
      </BrowserRouter>{" "}
    </AuthContextProvider>
  );
}

export default App;
