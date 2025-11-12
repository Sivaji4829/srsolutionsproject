
import React from 'react';

const ProductCard = ({ product, onBookNow }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card product-card h-100">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name} 
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">{product.name}</h5>
            <span className="badge bg-primary">{product.brand}</span>
          </div>
          <p className="card-text text-muted small">{product.shortDesc}</p>
          <h6 className="text-primary fw-bold mb-3">{product.price}</h6>
          
          <ul className="list-unstyled small text-muted mb-4">
            {product.specs.slice(0, 2).map((spec, idx) => (
              <li key={idx}><i className="fas fa-check-circle me-1 text-success"></i> {spec}</li>
            ))}
          </ul>

          <button 
            className="btn btn-outline-primary mt-auto w-100" 
            onClick={() => onBookNow(product)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;