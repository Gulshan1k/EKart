import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/sho.png';
import cartIcon from '../Assets/Logo.jpg';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={cartIcon} alt="Logo" className="me-2" style={{ width: '40px', height: '40px' }} />
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
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className={`nav-link ${location.pathname === `/${item.toLowerCase()}` ? 'active text-primary fw-bold' : ''}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search for products..." />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

          {/* Login & Cart */}
          <div className="d-flex align-items-center">
            <Link to="/loginsignup" className="btn btn-primary me-3">Login</Link>
            <Link to="/cart">
              <img src={logo} alt="Cart" className="img-fluid" style={{ width: '30px', height: '30px' }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
