import React from "react";
import "./ProductDetail.css"


const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <h3>Product Details</h3>
      <p>Name: {product.name}</p>
      <p>Store: {product.storeName}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;