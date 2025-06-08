import React from "react";
import "./Hero.css";
import bannerImage from "../Components/Assets/Banner.jpg";
import product1 from "../Components/Assets/M1.jpg";
import product2 from "../Components/Assets/M2.jpg";
import product3 from "../Components/Assets/M3.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
          <h2>Your Trusted Medical Marketplace</h2>
          <p>Find top-quality medicines & healthcare essentials at affordable prices.</p>
          {/* Corrected Button */}
          <button className="cta-button" onClick={() => navigate("/medicine")}>
            Shop Now
          </button>
        </div>
        <div className="hero-right">
          <img src={bannerImage} alt="Healthcare Solutions" />
        </div>
      </div>

      {/* Featured Categories */}
      <section className="categories">
        <h3>Explore Categories</h3>
        <div className="category-list">
          <div className="category-item">Prescription Medicines</div>
          <div className="category-item">Health Supplements</div>
          <div className="category-item">Diagnostic Tools</div>
          <div className="category-item">Personal Care</div>
        </div>
      </section>

      {/* Best-Selling Products */}
      <section className="best-sellers">
        <h3>Best Sellers</h3>
        <div className="product-list">
          <div className="product-item">
            <img src={product1} alt="Heart Care Tablets" />
            <p>Heart Care Tablets</p>
            <p><s>₹500</s> <strong>₹450</strong></p>
            <button>Add to Cart</button>
          </div>
          <div className="product-item">
            <img src={product2} alt="Vitamin C Capsules" />
            <p>Vitamin C Capsules</p>
            <p><s>₹300</s> <strong>₹250</strong></p>
            <button>Add to Cart</button>
          </div>
          <div className="product-item">
            <img src={product3} alt="Pain Relief Gel" />
            <p>Pain Relief Gel</p>
            <p><s>₹200</s> <strong>₹180</strong></p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h3>Stay Healthy, Stay Safe</h3>
        <p>Order your medicines from the comfort of your home.</p>
<button className="btn btn-primary cta-button" onClick={() => navigate("/contact")}>
      Contact Us
    </button>      </section>
    </div>
  );
};

export default Hero;
