import React from "react";
import "./SearchBar.css"


const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="search-bar">
      <label htmlFor="search-bar">Search by Product Name:</label>
      <input
        id="search-bar"
        type="text"
        placeholder="Enter product name..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;