import React, { useState } from "react";
import { products } from "../data";
import ProductDetail from "./ProductDetail";
import ProductForm from "./ProductForm";
import StoreFilter from "./StoreFilter";
import SearchBar from "./SearchBar";
import "./ProductList.css"


const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique store names from products
  const stores = [...new Set(products.map((product) => product.storeName))];

  // Filter products based on selected store and search query
  const filteredProducts = products.filter((product) => {
    const matchesStore = selectedStore ? product.storeName === selectedStore : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStore && matchesSearch;
  });

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <StoreFilter
        stores={stores}
        selectedStore={selectedStore}
        onStoreChange={setSelectedStore}
      />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {filteredProducts.map((product) => (
        <div key={product.id} onClick={() => setSelectedProduct(product)}>
          <p className="listing-product-detail-values-1">{product.name} - {product.storeName}</p>
        </div>
      ))}
      {selectedProduct && (
        <>
          <ProductDetail product={selectedProduct} />
          <button onClick={() => setIsEditing(true)} className="edit-button-1">Edit</button>
          {isEditing && <ProductForm product={selectedProduct} />}
        </>
      )}
    </div>
  );
};

export default ProductList;





// import React, { useState } from "react";
// import { products } from "../data";
// import ProductDetail from "./ProductDetail";
// import ProductForm from "./ProductForm";

// const ProductList = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   return (
//     <div>
//       <h2>Product List</h2>
//       {products.map((product) => (
//         <div key={product.id} onClick={() => setSelectedProduct(product)}>
//           <p>{product.name} - {product.storeName}</p>
//         </div>
//       ))}
//       {selectedProduct && (
//         <>
//           <ProductDetail product={selectedProduct} />
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           {isEditing && <ProductForm product={selectedProduct} />}
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductList;