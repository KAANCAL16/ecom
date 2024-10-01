import React, { useContext, useState } from "react";
import data from "../../data.js";
import FilterSidebar from "./FilterSidebar.jsx";
import "./Category.css";
import { CartContext } from "../../context/CartProvider.jsx";
import { Link } from "react-router-dom";

const Category = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <div className="category">
      <FilterSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/category/${product.category}`}>
              <img
                src={product.image1}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <div className="product-info">
                <span className="stars">{"★".repeat(product.stars)}</span>
                <span className="price">${product.price}</span>
                <span className="discount">Discount Price: ${product.discount}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="btn add-to-cart"
                >
                  {product.button}
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
