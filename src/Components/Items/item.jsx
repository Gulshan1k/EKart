import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For redirection
import "./item.css";
import "bootstrap/dist/css/bootstrap.min.css";

import medicine1 from "../Assets/M1.jpg";
import medicine2 from "../Assets/M2.jpg";
import medicine4 from "../Assets/M4.jpg";
import medicine5 from "../Assets/M5.jpg";
import medicine6 from "../Assets/M6.jpg";
import medicine7 from "../Assets/M7.jpg";
import medicine8 from "../Assets/M8.jpg";
import medicine9 from "../Assets/M9.jpg";
import medicine10 from "../Assets/M10.jpg";

const medicines = [
  { id: 1, name: "Heart Care Tablets", oldPrice: "₹500", newPrice: "₹450", image: medicine1 },
  { id: 2, name: "Vitamin C Capsules", oldPrice: "₹300", newPrice: "₹250", image: medicine2 },
  { id: 3, name: "Diabetes Control Pills", oldPrice: "₹600", newPrice: "₹550", image: medicine4 },
  { id: 4, name: "Immune Booster Syrup", oldPrice: "₹350", newPrice: "₹300", image: medicine5 },
  { id: 5, name: "Allergy Relief Tablets", oldPrice: "₹400", newPrice: "₹370", image: medicine6 },
  { id: 6, name: "Calcium Supplement", oldPrice: "₹450", newPrice: "₹400", image: medicine7 },
  { id: 7, name: "Cold & Flu Medicine", oldPrice: "₹250", newPrice: "₹220", image: medicine8 },
  { id: 8, name: "Digestive Health Capsules", oldPrice: "₹480", newPrice: "₹450", image: medicine9 },
  { id: 9, name: "Joint Pain Relief Cream", oldPrice: "₹550", newPrice: "₹500", image: medicine10 },
];

const addToOrder = async (medicine, navigate) => {
  // Extract the numerical value from the newPrice by removing non-numeric characters
  const price = parseFloat(medicine.newPrice.replace(/[^\d.]/g, ""));
  
  // Generate dynamic IDs for order, order items, and payment
  const orderId = Math.floor(Math.random() * 1000000);
  const orderItemId = Math.floor(Math.random() * 1000000);
  const paymentId = Math.floor(Math.random() * 1000000);
  
  // Construct the order payload
  const orderData = {
    orderId: orderId,
    userId: 1,
    orderDate: new Date().toISOString(),
    totalAmount: price,
    orderStatus: "Pending",
    trackingNumber: "TBA",
    orderItems: [
      {
        orderItemId: orderItemId,
        orderId: orderId,
        medicineId: medicine.id,
        quantity: 1,
        price: price,
        medicine: {
          medicineId: medicine.id,
          name: medicine.name,
          description: "Sample description",
          price: price,
          manufacturer: "Sample manufacturer",
          expirationDate: "2025-06-09",
          stockQuantity: 10,
          orderItems: []
        },
        order: "OrderReference"
      }
    ],
    payments: [
      {
        paymentId: paymentId,
        orderId: orderId,
        paymentMethod: "Online",
        paymentStatus: "Pending",
        paymentDate: new Date().toISOString(),
        amount: price,
        order: "PaymentReference"
      }
    ],
    user: {
      userId: 1,
      username: "JohnDoe",
      email: "johndoe@example.com",
      passwordHash: "hashed_password",
      role: "Customer",
      createdAt: new Date().toISOString(),
      adminLogs: [],
      orders: []
    }
  };

  try {
    const response = await axios.post("https://localhost:7188/api/Orders", orderData, {
      headers: {
        "Content-Type": "application/json",
        "accept": "text/plain"
      }
    });
    
    if (response.status === 200 || response.status === 201) {
      alert(`${medicine.name} ordered successfully!`);
    } else {
      alert("There was an issue placing your order. Please try again.");
    }
  } catch (error) {
    console.error("Order error:", error);
    alert("An error occurred while placing your order. Please try again later.");
  }
};

export const Item = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="row">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card p-3 shadow-sm">
              <img src={medicine.image} alt={medicine.name} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{medicine.name}</h5>
                <p className="card-text">
                  Old Price: <s>{medicine.oldPrice}</s><br />
                  New Price: <strong>{medicine.newPrice}</strong>
                </p>
                <button className="green-btn" onClick={() => addToOrder(medicine, navigate)}>
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
