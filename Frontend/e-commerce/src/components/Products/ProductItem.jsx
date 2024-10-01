import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const isInCart = cartItems.some((cartItem) => cartItem.id === product.id);

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.image1} alt={product.title} className="img1" />
        <img src={product.image2} alt={product.title} className="img2" />
        <div className="product-discount">{product.discRatio}</div>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() => addToCart(product)}
            disabled={isInCart}
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button>
            <i className="fas fa-heart"></i>
          </button>
          <button
            onClick={() => navigate(`/product/${product.id}`)} 
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            <i style={{ color: "white" }} className="bi bi-eye-fill"></i>
          </button>
        </div>
      </div>
      <div className="product-title">{product.title}</div>
      <ul className="product-star">
        {Array(product.stars)
          .fill()
          .map((_, index) => (
            <li key={index}>
              <i className="fas fa-star"></i>
            </li>
          ))}
      </ul>
      <div className="product-prices">
        <strong>${product.discount}</strong>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discRatio: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
