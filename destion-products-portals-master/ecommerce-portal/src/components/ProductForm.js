import React, { useState } from "react";
import "./ProductForm.css"

const ProductForm = ({ product }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="description" value={formData.description} onChange={handleChange} />
      <input name="price" value={formData.price} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;