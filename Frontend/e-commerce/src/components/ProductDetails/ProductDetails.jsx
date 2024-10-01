import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import "./ProductDetails.css";
import products from "../../data";
import { FaShoppingBasket } from "react-icons/fa";
import { CartContext } from "../../context/CartProvider";

const Dropdown = ({ label, options = [], selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="btn btn-dropdown" onClick={handleToggle}>
        {selectedOption || label}
        <span className="arrow">&#9660;</span>
      </button>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        {options.map((option, index) => (
          <p
            key={index}
            onClick={() => handleSelect(option)}
            className={option === selectedOption ? "selected-option" : ""}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <p>Product Not Found.</p>;
  }

  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <img
            src={product.image1}
            alt={product.title}
            className="main-image"
          />
          <div className="product-content">
            <div className="product-title">
              <h1>{product.title}</h1>
            </div>
            <div className="product-desc">
              <p>{product.description}</p>
            </div>
            <div className="dropdown-select">
              <Dropdown
                label="Color"
                options={product.colors}
                selectedOption={selectedColor}
                onSelect={setSelectedColor}
              />
              <Dropdown
                label="Size"
                options={product.size}
                selectedOption={selectedSize}
                onSelect={setSelectedSize}
              />
            </div>
            <div className="product-btn">
              <button
                className="btn add-to-cart"
                onClick={() => addToCart(product)}
              >
                {product.button} <FaShoppingBasket />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
