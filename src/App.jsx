
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BUSINESS_PHONE } from './config'; // Import from new config file

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />

      {/* FLOATING WHATSAPP BUTTON (Global) */}
      <a 
        href={`https://api.whatsapp.com/send?phone=${BUSINESS_PHONE}&text=Hello%20SR%20SOLUTIONS,%20I%20want%20to%20book%20a%20service.`}
        className="floating-wa-btn"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp fa-lg"></i>
        <span>Book on WhatsApp</span>
      </a>
    </div>
  );
}

export default App;