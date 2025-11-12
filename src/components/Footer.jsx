
import React from 'react';
import { BUSINESS_PHONE } from '../config'; // Import from config to avoid circular dependency

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>SR SOLUTIONS & CCTV</h5>
            <p className="text-muted small">
              Your trusted partner for Computer Sales, Service, and CCTV Security Systems.
              Providing reliable tech solutions for homes and businesses.
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/#services" className="text-decoration-none text-light">Services</a></li>
              <li><a href="/#works" className="text-decoration-none text-light">Previous Works</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact / Book Service</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Connect</h5>
            <a 
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_PHONE}&text=Hello,%20I%20found%20your%20website%20and%20have%20a%20query.`}
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline-success btn-sm w-100"
            >
              <i className="fab fa-whatsapp me-2"></i>Chat on WhatsApp
            </a>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center small text-muted">
          &copy; {new Date().getFullYear()} SR Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;