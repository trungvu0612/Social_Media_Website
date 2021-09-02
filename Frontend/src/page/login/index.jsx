import React from "react";
import GoogleLogin from "react-google-login";

export default function Login() {
  const responseSuccessGoogle = (response) => {
    console.log(response);
  };

  const responseErrorGoogle = (response) => {
    alert("Login fail!!!");
  };
  return (
    <div className="login">
      <div className="l-form">
        <form action="/home.html" className="form">
          <img src="/img/logo1.svg" alt="" />

          {/* <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label htmlFor className="form__label">
              Email
            </label>
          </div>
          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor className="form__label">
              Password
            </label>
          </div>
          <input
            type="submit"
            className="form__button"
            defaultValue="Sign In"
            value="Login"
          /> */}
          <GoogleLogin
            clientId="1092699882576-7bnelde1sddfrqbnn20928cmenj5qvqr.apps.googleusercontent.com"
            buttonText="Login with google account"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </form>
      </div>
    </div>
  );
}
