import React from "react";
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
  { name: "Heart Care Tablets", oldPrice: "₹500", newPrice: "₹450", image: medicine1 },
  { name: "Vitamin C Capsules", oldPrice: "₹300", newPrice: "₹250", image: medicine2 },
  { name: "Diabetes Control Pills", oldPrice: "₹600", newPrice: "₹550", image: medicine4 },
  { name: "Immune Booster Syrup", oldPrice: "₹350", newPrice: "₹300", image: medicine5 },
  { name: "Allergy Relief Tablets", oldPrice: "₹400", newPrice: "₹370", image: medicine6 },
  { name: "Calcium Supplement", oldPrice: "₹450", newPrice: "₹400", image: medicine7 },
  { name: "Cold & Flu Medicine", oldPrice: "₹250", newPrice: "₹220", image: medicine8 },
  { name: "Digestive Health Capsules", oldPrice: "₹480", newPrice: "₹450", image: medicine9 },
  { name: "Joint Pain Relief Cream", oldPrice: "₹550", newPrice: "₹500", image: medicine10 },
];

export const Item = () => {
  return (
    <div className="container mt-4">
      {/* <h2 className="text-center mb-4">Medicine List</h2> */}
      <div className="row">
        {medicines.map((medicine, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card p-3 shadow-sm">
              <img src={medicine.image} alt={medicine.name} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{medicine.name}</h5>
                <p className="card-text">
                  Old Price: <s>{medicine.oldPrice}</s> <br />
                  New Price: <strong>{medicine.newPrice}</strong>
                </p>
                  <button className="green-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
