// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const router = express.Router();

// // In-memory user storage (No database)
// const users = [];

// // Signup Route
// router.post("/signup", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if user exists
//     if (users.find((user) => user.username === username)) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     users.push({ username, password: hashedPassword });

//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = users.find((user) => user.username === username);
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User"); // Assuming you have a User model

// // Login route
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user exists
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Validate password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Generate a token (if using JWT)
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     // Send success response
//     res.json({ success: true, token });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;


// const login = async (username, password) => {
//   try {
//     console.log("Sending login request..."); // Debugging
//     const response = await fetch(
//       `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       }
//     );

//     console.log("Login response:", response); // Debugging
//     const data = await response.json();
//     console.log("Login data:", data); // Debugging

//     if (response.ok) {
//       localStorage.setItem("token", data.token);
//       setIsAuthenticated(true);
//       return { success: true };
//     } else {
//       return { success: false, message: data.message };
//     }
//   } catch (error) {
//     console.error("Login error:", error); // Debugging
//     return { success: false, message: "An error occurred. Please try again." };
//   }
// };

// const signup = async (username, password) => {
//   try {
//     console.log("Sending signup request..."); // Debugging
//     const response = await fetch(
//       `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       }
//     );

//     console.log("Signup response:", response); // Debugging
//     const data = await response.json();
//     console.log("Signup data:", data); // Debugging

//     if (response.ok) {
//       return { success: true };
//     } else {
//       return { success: false, message: data.message };
//     }
//   } catch (error) {
//     console.error("Signup error:", error); // Debugging
//     return { success: false, message: "An error occurred. Please try again." };
//   }
// };


const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// In-memory user storage (No database)
const users = [];



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

module.exports = router;
