import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 E-Medical Kart. All rights reserved.</p>
      <nav>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
