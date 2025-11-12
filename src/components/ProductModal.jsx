
import React, { useState } from 'react';
import { BUSINESS_PHONE } from '../config'; // Fixed import

const ProductModal = ({ show, onClose, product }) => {
  const [mode, setMode] = useState('details'); // 'details' or 'form'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: 1,
    dateTime: '',
    notes: ''
  });

  React.useEffect(() => {
    if (show) {
      setMode('details');
      setFormData({ name: '', phone: '', address: '', quantity: 1, dateTime: '', notes: '' });
    }
  }, [show, product]);

  if (!show || !product) return null;

  // Helper to get full image URL
  const getFullImageUrl = (path) => {
    if (path.startsWith('http')) return path;
    return `${window.location.origin}${path.startsWith('/') ? '' : '/'}${path}`;
  };

  // --- QUICK BOOKING LOGIC ---
  const handleQuickBook = () => {
    // Simple plain text format
    const message = 
`Hello SR SOLUTIONS & CCTV, I am interested in the product: ${product.name}.
Price: ${product.price}
Ref Link: ${getFullImageUrl(product.image)}
Please contact me to complete booking.`;

    const url = `https://api.whatsapp.com/send?phone=${BUSINESS_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- CUSTOM ORDER LOGIC ---
  const handleCustomOrderSubmit = (e) => {
    e.preventDefault();
    
    // The exact simple text format requested
    const message = 
`Hello SR SOLUTIONS & CCTV,
I want to order:
Product: ${product.name}
Quantity: ${formData.quantity}
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address || 'Not Provided'}
Preferred visit: ${formData.dateTime || 'Anytime'}
Notes: ${formData.notes || 'None'}
Ref Link: ${getFullImageUrl(product.image)}
Please confirm the order and call me. Thanks.`;

    const url = `https://api.whatsapp.com/send?phone=${BUSINESS_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg">
            
            <div className="modal-header border-0 pb-0">
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body p-4">
              {mode === 'details' ? (
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="position-relative rounded overflow-hidden shadow-sm">
                        <img src={product.image} className="img-fluid w-100" alt={product.name} style={{objectFit: 'cover', height: '300px'}} />
                        <span className="position-absolute top-0 start-0 bg-primary text-white px-3 py-1 m-2 rounded-pill small">
                            {product.brand}
                        </span>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <h3 className="fw-bold mb-2">{product.name}</h3>
                    <h4 className="text-primary fw-bold mb-3">{product.price}</h4>
                    <p className="text-muted mb-4">{product.longDesc}</p>
                    
                    <div className="bg-light p-3 rounded mb-4">
                        <h6 className="fw-bold text-uppercase small text-muted mb-2">Specifications</h6>
                        <ul className="list-unstyled mb-0 row">
                        {product.specs.map((spec, idx) => (
                            <li key={idx} className="col-6 mb-1 small">
                                <i className="fas fa-check text-success me-2"></i>{spec}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="mt-auto d-grid gap-2">
                        <button className="btn btn-success py-2 fw-bold" onClick={handleQuickBook}>
                          <i className="fab fa-whatsapp me-2"></i>Quick Book (WhatsApp)
                        </button>
                        <button className="btn btn-outline-dark py-2 fw-bold" onClick={() => setMode('form')}>
                           Enter Delivery Details
                        </button>
                    </div>
                  </div>
                </div>
              ) : (
                // BOOKING FORM VIEW
                <form onSubmit={handleCustomOrderSubmit}>
                  <h4 className="fw-bold mb-3">Complete Your Order</h4>
                  <div className="alert alert-light border border-primary d-flex align-items-center" role="alert">
                    <i className="fab fa-whatsapp text-success fa-2x me-3"></i>
                    <div>
                        <small className="d-block fw-bold">WhatsApp Inquiry</small>
                        <small className="text-muted">Clicking "Send" will open WhatsApp with your order details.</small>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold small">Full Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control bg-light" name="name" required value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small">Phone Number <span className="text-danger">*</span></label>
                      <input type="tel" className="form-control bg-light" name="phone" required value={formData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold small">Delivery Address</label>
                      <textarea className="form-control bg-light" name="address" rows="2" value={formData.address} onChange={handleInputChange} placeholder="House No, Street, Colony..."></textarea>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small">Quantity</label>
                      <input type="number" min="1" className="form-control bg-light" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small">Preferred Delivery Time</label>
                      <input type="text" className="form-control bg-light" placeholder="e.g. Tomorrow Evening" name="dateTime" value={formData.dateTime} onChange={handleInputChange} />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold small">Additional Notes</label>
                      <input type="text" className="form-control bg-light" name="notes" value={formData.notes} onChange={handleInputChange} />
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between mt-4 border-top pt-3">
                    <button type="button" className="btn btn-link text-decoration-none text-muted" onClick={() => setMode('details')}>
                      <i className="fas fa-arrow-left me-2"></i>Back to Details
                    </button>
                    <button type="submit" className="btn btn-primary px-5 fw-bold">
                      Send Order <i className="fas fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;