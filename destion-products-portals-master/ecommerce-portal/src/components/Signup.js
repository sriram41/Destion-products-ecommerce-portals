import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import './Signup.css'

function Signup() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   const result = await signup(credentials.username, credentials.password);
  //   if (result.success) {
  //     navigate("/login");
  //   } else {
  //     setError(result.message);
  //   }
  // };



  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    const response = await fetch("https://sriram-khandavilli-destion-products.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      navigate("/login");
    } else {
      setError(data.message || "Signup failed");
    }
  } catch (error) {
    setError("An error occurred. Please try again.");
  }
};
  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;

