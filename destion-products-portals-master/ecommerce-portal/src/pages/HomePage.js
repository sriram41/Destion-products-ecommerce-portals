import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"


const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the E-Commerce Portal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/invoices">
            <span>
            <img className="home-img-1" src='./assets/invoice.png' alt='photo1' />
          <h2>  Invoice Generation Portal</h2>
            </span>
            </Link>
          </li>
          <li>
            <Link to="/products">
            <span>
            <img className="home-img-2" src='./assets/product.png' alt='photo2' />
           <h2> Product Management Portal </h2>
           </span>
           </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;