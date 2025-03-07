import React from "react";
import './StoreFilter.css'


const StoreFilter = ({ stores, selectedStore, onStoreChange }) => {
  return (
    <div className="store-filter">
      <label htmlFor="store-filter">Filter by Store:</label>
      <select
        id="store-filter"
        value={selectedStore}
        onChange={(e) => onStoreChange(e.target.value)}
      >
        <option value="">All Stores</option>
        {stores.map((store, index) => (
          <option key={index} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StoreFilter;