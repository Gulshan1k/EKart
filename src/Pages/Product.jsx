import React, { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    setCartItems([]); // Clear cart after order
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom p-3">
              <img src={item.image} alt={item.name} style={{ width: "60px" }} />
              <span>{item.name}</span>
              <span className="fw-bold">{item.newPrice}</span>
            </div>
          ))}
          <button className="btn btn-success mt-3 w-100" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
