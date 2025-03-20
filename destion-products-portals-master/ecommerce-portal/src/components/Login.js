// import React, { useState, useEffect } from "react";
// import { useAuth } from "./AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./Login.css" 

// function Login() {
//   const [credentials, setCredentials] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");
//   const { login, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/"); // Redirect to home (InvoiceList) if already logged in
//     }
//   }, [isAuthenticated, navigate]);

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setError("");
//   //   const result = await login(credentials.username, credentials.password);
//   //   if (result.success) {
//   //     navigate("/"); // Redirect to InvoiceList after login
//   //   } else {
//   //     setError(result.message);
//   //   }
//   // };


//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");
//   try {
//     const response = await fetch("https://sriram-khandavilli-destion-products.onrender.com/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       login(data.token); // Assuming your backend returns a token
//       navigate("/");
//     } else {
//       setError(data.message || "Login failed");
//     }
//   } catch (error) {
//     setError("An error occurred. Please try again.");
//   }
// };
  

//   return (
//     <div className="login-container">
//         <h1>Destion</h1>
//       <h2 className="latest-h2">Product Management and Invoice generation portal</h2>
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token); // Assuming your backend returns a token
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Destion</h1>
      <h2 className="latest-h2">Product Management and Invoice generation portal</h2>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;
