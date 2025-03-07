import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./Logout.css"


function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return <button onClick={handleLogout} className="logout-button">Logout</button>;
}

export default Logout;
