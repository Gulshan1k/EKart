import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Icon.ico';
import cartIcon from '../Assets/Logo.jpg';

export const Navbar = () => {
  const [menu,setMenu] = useState("Home")

  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <img src={cartIcon} alt="Logo" className="logo-img" />
        <span className="brand-name">E-MEDICAL KART</span>
      </div>
      
      <div className="nav-search">
        <input type="text" placeholder="Search for products..." />
      </div>
    <ul className='nav-menu'>
      <li><a href="#" onClick={() => setMenu("Home")}>Home {menu === "Home" ? <hr /> : null}</a></li>
      <li><a href="#" onClick={() => setMenu("Medicine")}>Medicine {menu === "Medicine" ? <hr /> : null}</a></li>
      <li><a href="#" onClick={() => setMenu("Lab Test")}>Lab Test {menu === "Lab Test" ? <hr /> : null}</a></li>
      <li><a href="#" onClick={() => setMenu("Contact")}>Contact {menu === "Contact" ? <hr /> : null}</a></li>
    </ul>
      <div className='nav-login-cart'>
        <button className="login-btn">Login</button>
        <img src={logo} alt="Cart" className="icon-img" />
      </div>
    </nav>
  );
};
