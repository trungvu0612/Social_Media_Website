import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/authContext";

export default function Register() {
  // Context
  const { registerUser } = useContext(AuthContext);

  // local state
  const [register, setRegister] = useState({
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    userName: "",
    userAvatar: "",
  });

  //Router
  const history = useHistory();

  // get data as user input
  const onChangeRegisterForm = function (event) {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  // when the data changes, add new data for register state

  const { userEmail, userPassword, confirmPassword, userName, userAvatar } =
    register;

  const userRegister = async function (event) {
    event.preventDefault();

    if (userPassword != confirmPassword) {
      alert("Passwords do not match");
    }
    try {
      const registerData = await registerUser(register);
      if (!registerData.success) {
        alert("Registration failed");
      }
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="register">
      <div className="l-form">
        <form onSubmit={userRegister} className="form">
          <img src="/img/logo1.svg" alt="" />
          <h2 className="form__title">Register</h2>
          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="userEmail"
              value={userEmail}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Email
            </label>
          </div>
          <div className="form__div">
            <input
              type="password"
              className="form__input"
              placeholder=" "
              name="userPassword"
              value={userPassword}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Password
            </label>
          </div>
          <div className="form__div">
            <input
              type="password"
              className="form__input"
              placeholder=" "
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Confirm Password
            </label>
          </div>
          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="userName"
              value={userName}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Your name
            </label>
          </div>
          <div className="form__div">
            <input
              type="file"
              className="form__input"
              placeholder=" "
              name="userAvatar"
              value={userAvatar}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Your avartar
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
