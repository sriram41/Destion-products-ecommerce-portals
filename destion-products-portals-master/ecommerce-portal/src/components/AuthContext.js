// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if token exists in localStorage
//     const token = localStorage.getItem("token");
//     if (token) setIsAuthenticated(true);
//   }, []);

//   const login = async (username, password) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         setIsAuthenticated(true);
//         return { success: true };
//       } else {
//         return { success: false, message: data.message };
//       }
//     } catch (error) {
//       return { success: false, message: "Server error" };
//     }
//   };

//   const signup = async (username, password) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         return { success: true };
//       } else {
//         return { success: false, message: data.message };
//       }
//     } catch (error) {
//       return { success: false, message: "Server error" };
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if token exists in localStorage
//     const token = localStorage.getItem("token");
//     if (token) setIsAuthenticated(true);
//   }, []);

//   const login = async (username, password) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ username, password }),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         setIsAuthenticated(true);
//         return { success: true };
//       } else {
//         return { success: false, message: data.message };
//       }
//     } catch (error) {
//       return { success: false, message: "Server error" };
//     }
//   };

//   const signup = async (username, password) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ username, password }),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         return { success: true };
//       } else {
//         return { success: false, message: data.message };
//       }
//     } catch (error) {
//       return { success: false, message: "Server error" };
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);



const login = async (username, password) => {
  try {
    console.log("Sending login request..."); // Debugging
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    console.log("Login response:", response); // Debugging
    const data = await response.json();
    console.log("Login data:", data); // Debugging

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Login error:", error); // Debugging
    return { success: false, message: "An error occurred. Please try again." };
  }
};

const signup = async (username, password) => {
  try {
    console.log("Sending signup request..."); // Debugging
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    console.log("Signup response:", response); // Debugging
    const data = await response.json();
    console.log("Signup data:", data); // Debugging

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Signup error:", error); // Debugging
    return { success: false, message: "An error occurred. Please try again." };
  }
};

    const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
