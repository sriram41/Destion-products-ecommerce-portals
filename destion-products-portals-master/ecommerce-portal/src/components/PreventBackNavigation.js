import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PreventBackNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/login") {
      navigate("/"); // Redirect logged-in users from login page
    }

    const handleBackButton = (event) => {
      if (isAuthenticated && location.pathname === "/login") {
        event.preventDefault();
        navigate("/");
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [location, isAuthenticated, navigate]);

  return null;
};

export default PreventBackNavigation;
