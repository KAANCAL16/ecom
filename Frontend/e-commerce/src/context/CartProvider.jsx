import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cartItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...cartItem, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== itemId
    );
    setCartItems(filteredCartItems);
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
