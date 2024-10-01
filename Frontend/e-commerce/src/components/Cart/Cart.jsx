import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./Cart.css";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  // console.log(cartItems);

  return (
    <section className="cart-page">
      <div className="container">
        {cartItems.length > 0 ? (
          <div className="cart-page-wrapper">
            <form className="cart-form">
              <div className="shop-table-wrapper">
                <CartTable />
              </div>
            </form>
            <div className="cart-collaterals">
              <CartTotals />
            </div>
          </div>
        ) : (
          <h2>There are no items in the cart!</h2>
        )}
      </div>
    </section>
  );
};

export default Cart;
