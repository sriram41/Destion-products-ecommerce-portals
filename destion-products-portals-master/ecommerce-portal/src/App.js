import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InvoicePage from "./pages/InvoicePage";
import ProductPage from "./pages/ProductPage";
import InvoiceList from "./components/InvoiceList";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { AuthProvider, useAuth } from "./components/AuthContext";
import PreventBackNavigation from "./components/PreventBackNavigation";
import Navbar from "./components/Navbar";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AppContent() {
  const location = useLocation();

  // Define routes where the Navbar should NOT be displayed
  const noNavbarRoutes = ["/login", "/signup", "/logout"];

  // Check if the current route is in the noNavbarRoutes array
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Conditionally render the Navbar */}
      {showNavbar && <Navbar />}

      <PreventBackNavigation />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/invoices" element={<PrivateRoute><InvoicePage /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
        <Route path="/invoicelist" element={<PrivateRoute><InvoiceList /></PrivateRoute>} />
        <Route path="/productlist" element={<PrivateRoute><ProductList /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;

















// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import InvoicePage from "./pages/InvoicePage";
// import ProductPage from "./pages/ProductPage";
// import InvoiceList from "./components/InvoiceList";
// import ProductList from "./components/ProductList";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Logout from "./components/Logout";
// import { AuthProvider, useAuth } from "./components/AuthContext";
// import PreventBackNavigation from "./components/PreventBackNavigation";
// import Navbar from "./components/Navbar";

// function PrivateRoute({ children }) {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

// function App() {
//   return (
//     <AuthProvider>
//     <Router>
//       <div className="App">
      
      
//       <PreventBackNavigation />
      
//         <Routes>
//         <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
//           <Route path="/invoices" element={<PrivateRoute><InvoicePage /></PrivateRoute>} />
//           <Route path="/products" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
//           <Route path="/invoicelist" element={<PrivateRoute><InvoiceList /></PrivateRoute>} />
//           <Route path="/productlist" element={<PrivateRoute><ProductList /></PrivateRoute>} />
//         </Routes>
//       </div>
//     </Router>
//     </AuthProvider>
//   );
// }

// export default App;

