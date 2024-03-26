import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLoginPopup }) => {
  const [currentState, setCurrentState] = useState("Sign In");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <h1>YumRush</h1>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLoginPopup(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <>
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Phone" required />
            </>
          )}
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currentState}</button>
        {currentState === "Sign In" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Sign up</span>
          </p>
        ) : (
          <p>
            Have an account?{" "}
            <span onClick={() => setCurrentState("Sign In")}>Sign in</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
