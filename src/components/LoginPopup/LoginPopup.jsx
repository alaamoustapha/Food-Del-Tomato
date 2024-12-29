import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({setshowlogin}) => {
  const [curstate, Setcurrstate] = useState("login");

  return (
    <div className="login-popup">
      <form className="login-popup-form">
        <div className="login-popup-title">
          <h1>{curstate}</h1>
          <img onClick={() => setshowlogin(false)}  src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {curstate === "sign up" && (
            <input type="text" placeholder="enter your name" required />
          )}

          <input type="email" placeholder="enter your email" required />
          <input type="password" placeholder="enter your password" required />
        </div>
        <button>{curstate === "sign up" ? "create account" : "login"} </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by confirm , you aproved our Privacy</p>
        </div>
        {curstate === "login" ? (
          <p>
            create a new acount{" "}
            <span
              onClick={() => {
                Setcurrstate("sign up");
              }}
            >
              Click here{" "}
            </span>
          </p>
        ) : (
          <p>
            Already have Acount{" "}
            <span
              onClick={() => {
                Setcurrstate("login");
              }}
            >
              {" "}
              login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
