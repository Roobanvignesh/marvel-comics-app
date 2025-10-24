import React, { useState } from "react";
import "./Login.css";
import crossIcon from "../../../public/assets/cross_icon.jpg";

const Login = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Login")
  const [data,setData] = useState({name:"",email:"",password:""})

  const onChangeHandler = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  
  const onLogin = (e) =>{
    e.preventDefault()
    console.log("Form submitted...",data);
    
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={()=>setShowLogin(false)}
            src={crossIcon}
            alt="Close"
            className="close-btn"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? null :(
            <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter your name"
            onChange={onChangeHandler}
            required
            />
          )}
          <input
            onChange={onChangeHandler}
            type="email"
            name="email"
            value={data.email}
            placeholder="Your Email"
            required
          />
          <input
            onChange={onChangeHandler}
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            required
          />
        </div>

        
        <button type="submit">
          {currState === "Login" ? 'Login' : 'Create Account'}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

          {currState === "Login" ? (
            <p> Create a new account? <span onClick={()=>setCurrState("Sign Up")}> Sign up </span> </p>
          ) : (
            <p> Already have an account?{" "}
            <span onClick={()=>setCurrState("Login")}>Login Here</span>
            </p>
          )}
      </form>
    </div>
  );
};

export default Login;
