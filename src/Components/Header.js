import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <Link to="/" className="logo">
              <img src="/assets/images/logo.png" alt="" style={{ maxWidth: '112px' }} />
            </Link>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/ImageCarousel">Gallery</Link></li>
            </ul>   
            <a className='menu-trigger'>
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
