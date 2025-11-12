
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_PHONE } from '../config'; // Fixed import to prevent circular dependency

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="custom-header">
        <div className="container-fluid px-lg-5">
          <nav className="navbar navbar-expand-lg navbar-light p-0 justify-content-between">
            
            {/* 1. BRAND SECTION */}
            <Link className="navbar-brand d-flex align-items-center me-4" to="/" onClick={closeMobileMenu}>
              <img 
                src="/logo.png" 
                alt="SR SOLUTIONS" 
                style={{ height: '50px', width: 'auto' }}
                onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/50x50?text=SR"}} 
                className="me-2"
              />
              <div className="brand-text d-flex flex-column">
                <h1>SR SOLUTIONS</h1>
                <p>CCTV • Installation • Service</p>
              </div>
            </Link>

            {/* 2. DESKTOP NAV (Hidden on Mobile) */}
            <div className="collapse navbar-collapse justify-content-center" id="desktopNav">
              <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                <li className="nav-item mx-1">
                  <Link 
                    className={`nav-pill-link ${location.pathname === '/' ? 'active' : ''}`} 
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-pill-link" href="/#services">Services</a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-pill-link" href="/#works">Works</a>
                </li>
                <li className="nav-item mx-1">
                  <Link 
                    className={`nav-pill-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. DESKTOP RIGHT ACTIONS */}
            <div className="d-none d-lg-flex align-items-center gap-3">
              <div className="header-search">
                <input type="text" className="form-control" placeholder="Search services..." />
                <button className="search-icon-btn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <a 
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_PHONE}&text=Hi,%20I%20want%20to%20book%20a%20service.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-pill fw-bold px-4 d-flex align-items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i> Book Now
              </a>
            </div>

            {/* 4. MOBILE TOGGLER (Visible only on Mobile) */}
            <button 
              className="btn d-lg-none p-2 border-0"
              type="button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars fa-2x text-dark"></i>
            </button>

          </nav>
        </div>
      </header>

      {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu}>
          <i className="fas fa-times"></i>
        </button>

        <div className="text-center mb-4">
            <img src="/logo.png" alt="Logo" style={{height: '60px'}} onError={(e) => {e.target.src="https://placehold.co/60x60?text=SR"}} />
        </div>

        <Link 
          to="/" 
          className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Home
        </Link>
        <a href="/#services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</a>
        <a href="/#works" className="mobile-nav-link" onClick={closeMobileMenu}>Previous Works</a>
        <Link 
          to="/contact" 
          className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Contact Us
        </Link>

        {/* Mobile Actions */}
        <div className="mt-4 d-flex flex-column gap-3 w-75">
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_PHONE}&text=Hi,%20I%20want%20to%20book%20a%20service.`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary rounded-pill py-3 fw-bold shadow"
          >
            <i className="fab fa-whatsapp me-2"></i> Book Now
          </a>
          <div className="header-search mx-auto w-100">
            <input type="text" className="form-control py-2" placeholder="Search..." />
            <button className="search-icon-btn">
                <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;