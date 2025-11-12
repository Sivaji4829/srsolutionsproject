
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { products } from '../data/products';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // --- DATA FOR SECTIONS ---
  const carouselItems = [
    {
      id: 1,
      image: "/ca1.png",
      title: "Advanced CCTV Solutions",
      desc: "Protect your home and business with 24/7 surveillance systems."
    },
    {
      id: 2,
      image: "/ca2.webp",
      title: "Custom PC Builds",
      desc: "High performance gaming and workstation PCs tailored for you."
    },
    {
      id: 3,
      image: "/ca3.webp",
      title: "Professional Networking",
      desc: "Seamless Wi-Fi and LAN setup for offices and homes."
    }
  ];

  const previousWorks = [
    { id: 1, title: "Tech Park Installation", img: "/tech.jpg" },
    { id: 2, title: "Gaming Cafe Setup", img: "/gaming.jpg" },
    { id: 3, title: "Apartment Security", img: "/apart.jpg" },
    { id: 4, title: "Server Room Cabling", img: "/server.webp" }
  ];

  const upcomingWorks = [
    { id: 1, project: "City Surveillance Phase 1", status: "Starting Next Month", icon: "fa-video" },
    { id: 2, project: "University Lab Upgrade (50 Units)", status: "In Planning", icon: "fa-desktop" }
  ];

  const clients = [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", // IBM
  "https://www.ap.gov.in/assets/images/aplogo.png", // AP Government
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA7VBMVEVHcEz/RkL/R0D+SEr/RUD/RkOwjlb/SD7/SE3/SUj/Vzb/VDf9TFb8TVeHoFb/YTD/byn8TVn/jRr/fSL/mxL/SEj+yQn/ohH/tQv+VUb/vQn/wwn+zgj9wQm3xQ39zgT6zQYwhv/7zgowhv8uhv0ek+Avhv7yzAPjywIvhv0whv7PyQHUygIth/y3yAEnivSlxwGSxgUak94fj+h5xAlgwxMLqp8NnsQVlte6xwBNwh45wC0xwDMLt28IrJgJpa0kjPCaxQEpvzsevkkWvVANumQQu18JtXkIsIgTvVYOvGALuWtJwh4OvF8OvF9ccfxCAAAAT3RSTlMAUZvT7P8T//+wiv//kAv6/mD//+V2jv//JKf//0EmxOr/rP7+MEX//x10/6eu//3+/9v///7I//+K//+KS/3/YeX//7dsnv7/////5s3tMAqBMAAAAXFJREFUeAF0jUUCwCAMwDp3d/f9/4krnVt6goQCFzheECVJFHgOPpB5RZHYIKqqyU+vGwpCXkVM07pp2zEQ8hSYiCBf1rsuFrQCvaSahHe+9wMqWHJuOD2E/lYoWsRxkUbBxcdJshY6bEQ3L6fpWmTnXXbxkBcpJTb8UBZFgUX156uyLLHI4Y+YgqL+DZqS0R7n7o4NLQX9GQwbI5tugpKI7wF5Rjd/BiNCCQZfX5BfCwyWrsnagGEYiKKpMkLqgJmZmXn/caKTzGoM7+v4IEiWPQdJ4fMhFujHCzjH7Wny6xFwMB9UKBa4KN3Tl4kh9AZYVJRbpXhVVRGX0asEXNP1a7MM0wQJA+0WFcQtyz7bcFzPAwn+8AkPwmjDcZK6WJGR75zwsCirOo7rpu0SojC2oQUeIF72/TCMY4sUKSj2wX9iXgAHwYgEoKBPizOBgx4EhwnCtxOtDnYTzn1Gnw3wzYQT3zDJrpmXYVjmpj7d/gPknlJE6eZSewAAAABJRU5ErkJggg==" // TCS
];

  const handleBookNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      {/* 1. CAROUSEL SECTION */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button key={item.id} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`}></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={item.image} className="d-block w-100" alt={item.title} />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4 fw-bold text-white">{item.title}</h2>
                <p className="lead text-white-50">{item.desc}</p>
                <a href="#products" className="btn btn-primary btn-lg px-4 rounded-pill shadow">View Products</a>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* 2. OWNER SECTION */}
      <section className="py-5 owner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img 
                src="/own.jpg" 
                alt="Owner" 
                className="rounded-circle owner-img mb-3" 
              />
              <div className="mt-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
            </div>
            <div className="col-md-7">
              <span className="badge bg-primary mb-2">EST. 2012</span>
              <h2 className="fw-bold mb-3 display-6">SR Solutions & CCTV</h2>
              <h5 className="text-muted mb-4">"Your Security & Digital Growth is Our Priority"</h5>
              <p className="lead text-secondary">
                At SR Solutions, we don't just sell boxes; we build trust. From securing your home with advanced CCTV to building the ultimate gaming rig, my team and I are dedicated to providing personal support and reliable after-sales service.
              </p>
              <div className="d-flex align-items-center mt-4">
                {/* <img src="https://via.placeholder.com/150x50?text=Signature" alt="Signature" style={{opacity:0.6, height: '40px'}} /> */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section className="py-5 bg-light" id="products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="row g-4">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBookNow={handleBookNow} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREVIOUS WORKS GALLERY */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="text-center text-muted mb-5">A glimpse of our recent installations and setups.</p>
          <div className="row g-4">
            {previousWorks.map(work => (
              <div key={work.id} className="col-md-6 col-lg-3">
                <div className="work-img-container position-relative">
                  <img src={work.img} alt={work.title} className="work-img" />
                  <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-2 text-center">
                    <span className="fw-bold small">{work.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UPCOMING WORKS & CLIENTS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Upcoming Works */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4 border-start border-5 border-primary ps-3">Upcoming Projects</h3>
              <div className="list-group border-0 shadow-sm">
                {upcomingWorks.map(work => (
                  <div key={work.id} className="list-group-item border-0 py-3 d-flex align-items-center">
                    <div className="bg-light rounded-circle p-3 me-3 text-primary">
                        <i className={`fas ${work.icon} fa-lg`}></i>
                    </div>
                    <div>
                        <h6 className="mb-1 fw-bold">{work.project}</h6>
                        <span className="badge bg-warning text-dark">{work.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4 border-start border-5 border-primary ps-3">Trusted By</h3>
              <div className="bg-white p-5 rounded shadow-sm text-center">
                <div className="row g-4 justify-content-center align-items-center">
                  {clients.map((logo, index) => (
                    <div key={index} className="col-4">
                      <img src={logo} alt="Client" className="img-fluid client-logo" />
                    </div>
                  ))}
                </div>
                <p className="text-muted mt-4 small">And 500+ Happy Home Owners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        product={selectedProduct} 
      />
    </>
  );
};

export default Home;