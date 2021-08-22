import Marketing from "./page/marketing";
import "../src/assets/scss/style.scss";
import Admin from "./page/admin";
import AdminLogin from "./page/admin-login";
import Home from "./page/home";
import Login from "./page/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Marketing} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />{" "}
          <Route path="/login-admin" component={AdminLogin} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
