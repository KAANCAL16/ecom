import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";

const CartItem = ({ cartItem }) => {
  const { removeFromCart, updateCartQuantity } = useContext(CartContext);

  const handleQuantityChange = (amount) => {
    const newQuantity = cartItem.quantity + amount;
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateCartQuantity(cartItem.id, newQuantity);
    }
  };

  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.image1} alt={cartItem.title} />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(cartItem.id)}
        ></i>
      </td>
      <td>{cartItem.title}</td>
      <td>${parseFloat(cartItem.price).toFixed(2)}</td>
      <td className="product-quantity">
        <CiCircleMinus className="minus-icons" onClick={() => handleQuantityChange(-1)} /> 
        {cartItem.quantity} 
        <CiCirclePlus className="plus-icons" onClick={() => handleQuantityChange(1)} />
      </td>
      <td>${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
    </tr>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number.isRequired,
    image1: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
