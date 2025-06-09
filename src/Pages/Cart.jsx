import React, { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";
import axios from "axios";

const API_ORDER_URL = "https://localhost:7188/api/orders"; // Order API

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const token = localStorage.getItem("token"); // Check login token

  const placeOrder = async () => {
    if (!token) {
      alert("Please log in to place an order!");
      return;
    }

    try {
      await axios.post(
        API_ORDER_URL,
        { items: cartItems },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Order placed successfully!");
    } catch (error) {
      alert("Order failed! Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.name} className="d-flex justify-content-between align-items-center border-bottom p-3">
              <img src={item.image} alt={item.name} style={{ width: "60px" }} />
              <span>{item.name}</span>
              <span className="fw-bold">{item.newPrice}</span>
            </div>
          ))}
          {token && (
            <button className="btn btn-success mt-3 w-100" onClick={placeOrder}>
              Place Order
            </button>
          )}
        </div>
      )}
      {!token && <p className="text-danger mt-3">Login to place an order.</p>}
    </div>
  );
};

export default Cart;
