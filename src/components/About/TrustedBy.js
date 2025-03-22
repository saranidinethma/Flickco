import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  const customers = [
    { id: 1, logo: '/path/to/logo1.png', alt: 'Goodbuyz' },
    { id: 2, logo: '/path/to/logo2.png', alt: 'DU Coop' },
    { id: 3, logo: '/path/to/logo3.png', alt: 'Kingdom Lanka' },
    { id: 4, logo: '/path/to/logo4.png', alt: 'Live School' },
  ];

  return (
    <div className="trusted-by-container">
      <h2 className="trusted-by-title">
        Trusted by over <span className="highlight">50+</span> customers
      </h2>
      <div className="carousel">
        <button className="arrow left">&#8592;</button>
        <div className="logos">
          {customers.map((customer) => (
            <img key={customer.id} src={customer.logo} alt={customer.alt} className="customer-logo" />
          ))}
        </div>
        <button className="arrow right">&#8594;</button>
      </div>
    </div>
  );
};

export default TrustedBy;
