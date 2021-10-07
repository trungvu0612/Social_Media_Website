import Marketing from "./page/marketing";
import "../src/assets/scss/style.scss";
import Admin from "./page/admin";
import AdminLogin from "./page/admin-login";
import Home from "./page/home";
import Login from "./page/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./page/register";
import AuthContextProvider from "./contexts/authContext";
import CheckRedirect from "./component/checkRouting/checkRedirect";
import ProtectAdmin from "./component/checkRouting/protectAdmin";

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
            <CheckRedirect path="/home" component={Home} />{" "}
            <Route path="/login-admin" component={AdminLogin} />{" "}
            <ProtectAdmin path="/admin" component={Admin} />{" "}
          </Switch>{" "}
        </div>{" "}
      </BrowserRouter>{" "}
    </AuthContextProvider>
  );
}

export default App;
