import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login">
      <img className="logo" src={assets.logo_big} alt="Chat's logo" />
      <form className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign Up" ? (
          <input
            type="text"
            placeholder="Username"
            required
            className="form-input"
          />
        ) : null}

        <input
          type="email"
          placeholder="E-mail"
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
        />
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
