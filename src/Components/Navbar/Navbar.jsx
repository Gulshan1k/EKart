import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/sho.png";
import cartIcon from "../Assets/Logo.jpg";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    navigate("/"); // Redirect to Home after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={cartIcon} alt="Logo" className="me-2" style={{ width: "40px", height: "40px" }} />
          <span className="fw-bold text-primary">E-MEDICAL KART</span>
        </Link>

        {/* Navbar Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {["Home", "Medicine", "Lab Test", "Contact"].map((item) => (
              <li key={item} className="nav-item">
                <Link to={`/${item.toLowerCase()}`} className="nav-link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login, Logout & Cart */}
          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <>
                <span className="text-success fw-bold me-3">Logged In</span>
                <button className="btn btn-danger me-3" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/loginsignup" className="btn btn-primary me-3">
                Login
              </Link>
            )}
            <Link to="/cart">
              <img src={logo} alt="Cart" className="img-fluid" style={{ width: "30px", height: "30px" }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
