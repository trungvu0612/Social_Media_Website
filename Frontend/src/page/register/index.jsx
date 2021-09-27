import React from "react";

export default function Register() {
  return (
    <div className="register">
      <div className="l-form">
        <form action="/home.html" className="form">
          <img src="/img/logo1.svg" alt="" />
          <h2 className="form__title">Register</h2>
          <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label htmlFor className="form__label">
              Name
            </label>
          </div>
          <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label htmlFor className="form__label">
              Username
            </label>
          </div>
          <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label htmlFor className="form__label">
              Password
            </label>
          </div>
          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor className="form__label">
              Email
            </label>
          </div>
          <div className="form__div">
            <input type="file" className="form__input" placeholder=" " />
            <label htmlFor className="form__label">
              Avatar
            </label>
          </div>
          <input
            type="submit"
            className="form__button"
            defaultValue="Sign In"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
}
