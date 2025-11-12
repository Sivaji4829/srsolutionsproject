
import React, { useState } from 'react';
import { BUSINESS_PHONE } from '../config'; // Fixed import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dateTime: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple plain text format for service requests
    const message = 
`Hello SR SOLUTIONS & CCTV, I want to book a service/site survey.
Name: ${formData.name}
Phone: ${formData.phone}
Preferred visit: ${formData.dateTime || 'As soon as possible'}
Notes: ${formData.notes}
Please confirm.`;
    
    const url = `https://api.whatsapp.com/send?phone=${BUSINESS_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">Get In Touch</h2>
        <p className="text-muted lead">We are just a call or a click away.</p>
        <div className="bg-primary mx-auto mt-3" style={{width: '80px', height: '4px', borderRadius:'2px'}}></div>
      </div>

      <div className="row g-5 align-items-start">
        {/* Contact Details */}
        <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-4">Contact Information</h4>
                    
                    <div className="d-flex align-items-center mb-4">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h6 className="fw-bold mb-1">Our Location</h6>
                            <p className="text-muted mb-0 small">Door No 2 B, Main Road 6th Line, Nallacheruvu, Guntur - 522003(Beside Sbi Atm)</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                            <h6 className="fw-bold mb-1">Phone Support</h6>
                            <p className="text-muted mb-0 small">+{BUSINESS_PHONE}</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h6 className="fw-bold mb-1">Email Us</h6>
                            <p className="text-muted mb-0 small">support@srsolutions.com</p>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="rounded overflow-hidden mt-4 shadow-sm border">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.7328071016714!2d80.44105979999999!3d16.2854591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75662d059d8f%3A0x2125e36836bf62e0!2sSR%20SOLUTIONS%20%26%20CCTV!5e0!3m2!1sen!2sin!4v1762951544374!5m2!1sen!2sin" 
                            width="100%" 
                            height="300" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SR Solutions Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

        {/* Service Booking Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-primary text-white p-4">
              <h4 className="mb-0"><i className="fas fa-tools me-2"></i>Book a Site Survey / Service</h4>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label fw-bold small">Your Name</label>
                        <input type="text" className="form-control p-3 bg-light border-0" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold small">Phone Number</label>
                        <input type="tel" className="form-control p-3 bg-light border-0" name="phone" required value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <label className="form-label fw-bold small">Preferred Visit Date & Time</label>
                        <input type="text" className="form-control p-3 bg-light border-0" placeholder="e.g., Tomorrow 10 AM" name="dateTime" value={formData.dateTime} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <label className="form-label fw-bold small">Describe Issue or Requirement</label>
                        <textarea className="form-control p-3 bg-light border-0" rows="4" name="notes" value={formData.notes} onChange={handleChange} placeholder="I need CCTV installation / My PC is not turning on..."></textarea>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-dark w-100 py-3 mt-4 fw-bold shadow-sm transition-all">
                  Send Request <i className="fab fa-whatsapp ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;