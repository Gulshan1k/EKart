import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Redirect users after login
import "bootstrap/dist/css/bootstrap.min.css";

const API_REGISTER_URL = "https://localhost:7188/api/Auth/register";
const API_LOGIN_URL = "https://localhost:7188/api/Auth/login";

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate(); // Enables redirection

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_REGISTER_URL, userData);
      alert("Sign-up successful! Redirecting to login...");
      setIsSignUp(false);
    } catch (error) {
      alert("Sign-up failed! Please check your details.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_LOGIN_URL, {
        username: userData.username,
        password: userData.password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", "true"); // Save login status
      alert("Login successful! Redirecting to home...");
      navigate("/"); // Redirect to home page
    } catch (error) {
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center fw-bold">{isSignUp ? "Sign Up" : "Login"}</h2>

        <form className="mt-4" onSubmit={isSignUp ? handleSignUp : handleLogin}>
          <div className="mb-3">
            <input type="text" name="username" className="form-control" placeholder="Username" onChange={handleChange} required />
          </div>
          {isSignUp && (
            <div className="mb-3">
              <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
            </div>
          )}
          <div className="mb-3">
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>

        <p className="text-center mt-3">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span className="text-primary fw-bold ms-2" style={{ cursor: "pointer" }} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? " Login" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
