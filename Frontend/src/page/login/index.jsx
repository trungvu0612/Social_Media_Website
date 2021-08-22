import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="l-form">
        <form action="/home.html" className="form">
          <img src="/img/logo1.svg" alt="" />
          <h1 className="form__title">Sign In</h1>
          <div className="form__div">
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
          />
        </form>
      </div>
    </div>
  );
}
