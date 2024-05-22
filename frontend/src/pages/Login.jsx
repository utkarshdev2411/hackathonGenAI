import React, { useState } from "react";
import "../styles/loginStyle.css";
// import { CiUser } from "react-icons/ci";// Importing CSS file
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { GoogleLoginButton } from "react-social-login-buttons";

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
   const user=await axios.post('http://localhost:8000/api/user/login', {
      email, password
    })

    console.log(user)
    localStorage.setItem("user",JSON.stringify(user))
    toast.success("login successfully")
    setEmail("")
    setPassword("")
    navigate('/')
  }


  return (
    <div className="login-container">

      <div className="second">
        <div className="left">
          <img id="image" src="src/assets/image1.jpg" />
        </div>

        <div className="right">
          <p>Welcome Back!</p>
          <form >
            <label className="text-lg tracking-wide text-slate-700 mb-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="icon outline-none mb-3 px-4 py-3 "
              type="email"
              placeholder="username01@gmail.com"
              required
            />
            <label className="text-lg tracking-wide text-slate-700 mb-2">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none mb-3 px-4 py-3 " type="password" placeholder="Password" required />

            <Link className="my-4 text-sm text-blue-500 tracking-wide font-medium">Forgot password ?</Link>
            <div className="second-3">
              <button onClick={handleSubmit}>Login</button>
            </div>

            <div className="third">
              <span className="text-xl text-center text-slate-600 font-semibold tracking-wide">Or</span>
              <div className="third-1">
                <GoogleLoginButton className="thirder" onClick={() => alert("Hello")} />
              </div>
            </div>
          </form>
          <Link to={'/signup'} className=" hover:text-blue-600 mt-8 text-md text-gray-600 tracking-wide font-semibold">Don't have an Account, Sign Up here?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;





