import React from 'react';
import './Navbar.css';
import logo from '../Assets/Icon.ico';
import cartIcon from '../Assets/Logo.jpg';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="brand-name">SHOPPER</span>
      </div>
      
      <div className="nav-search">
        <input type="text" placeholder="Search for products..." />
      </div>

      <ul className='nav-menu'>
        <li><a href="#">Home<hr></hr></a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className='nav-login-cart'>
        <button className="login-btn">Login</button>
        {/* <img src={cartIcon} alt="Cart" className="icon-img" /> */}
      </div>
    </nav>
  );
};
