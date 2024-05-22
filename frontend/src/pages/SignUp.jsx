import React from "react";
import "../styles/signupStyle.css";
import { Link } from 'react-router-dom';
import { GoogleLoginButton } from "react-social-login-buttons";

const SignUp = () => {
  return (
    <div className="login-container flex-col md:flex-row ">

      <div className="second">
        <div className="left">
          <img id="image" src="src/assets/image1.jpg" />
        </div>

        <div className="right">
          <p>Welcome Back!</p>
          <form>
            <label className="text-lg tracking-wide text-slate-700 mb-2">Name</label>
            <input className="outline-none mb-3 px-4 py-3 " type="password" placeholder="Name" required />
            <label className="text-lg tracking-wide text-slate-700 mb-2">Email</label>
            <input className="outline-none mb-3 px-4 py-3 " type="email" placeholder="username01@gmail.com" required />
            <label className="text-lg tracking-wide text-slate-700 mb-2">Password</label>
            <input className="outline-none mb-3 px-4 py-3 " type="password" placeholder="Password" required />

            <div className="second-3">
              <button className=" bg-blue-700 hover:bg-blue-500" type="submit">
                Login
              </button>
            </div>

            <div className="third">
              <span className="text-xl text-center text-slate-600 font-semibold tracking-wide">Or</span>
              <div className="third-1">
                <GoogleLoginButton className="px-4 py-3 text-lg text-slate-800 text-center" onClick={() => alert("Hello")} />
              </div>
            </div>
          </form>
          <Link to={'/login'} className=" hover:text-blue-600 mt-8 text-md text-gray-600 tracking-wide font-semibold">Already have an Account, Login here?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
