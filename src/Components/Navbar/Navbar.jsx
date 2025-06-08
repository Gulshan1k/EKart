import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/Icon.ico';
import cartIcon from '../Assets/Logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={cartIcon} alt="Logo" className="me-2" style={{ width: '40px', height: '40px' }} />
          <span className="fw-bold text-primary">E-MEDICAL KART</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {["Home", "Medicine", "Lab Test", "Contact"].map((item) => (
              <li key={item} className="nav-item">
                <Link to={`/${item}`} onClick={() => setMenu(item)} className={`nav-link ${menu === item ? 'active text-primary fw-bold' : ''}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search for products..." />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

          <div className="d-flex align-items-center">
            <Link to='/LoginSignUp' className="btn btn-primary me-3">Login</Link>
            <Link to='/Cart'>
              <img src={logo} alt="Cart" className="img-fluid" style={{ width: '30px', height: '30px' }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
