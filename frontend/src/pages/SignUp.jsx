import React from "react";
import "../styles/signupStyle.css";
// import { CiUser } from "react-icons/ci";// Importing CSS file
import { Link } from 'react-router-dom';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { XLoginButton } from "react-social-login-buttons";

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="first">
        <h1>Website Logo</h1>
      </div>

      <div className="second">
        <div className="left">
          <img id="image" src="src/assets/image1.jpg" />
        </div>

        <div className="right">
          <p>Welcome Back!</p>
          <form>
            <label>Name</label>
            <input type="password" placeholder="Name" required />
            <label>Email</label>
            <input type="email" placeholder="username01@gmail.com" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <div className="second-3">
              <button type="submit">LOGIN</button>
              <button type="button">FORGET PASSWORD?</button>
            </div>

            <div className="third">
              <span>login with</span>
              <div className="third-1">
                <FacebookLoginButton className="thirder" onClick={() => alert("Hello")} />
                <GoogleLoginButton className="thirder" onClick={() => alert("Hello")} />
                <XLoginButton className="thirder" onClick={() => alert("Hello")} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
