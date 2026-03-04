import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    'Free Worldwide Shipping',
    'Sustainable Luxury',
    'Crafted in Italy',
    'Complimentary Returns',
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-item">
          {items.map((item, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot"></span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-item">
          {items.map((item, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
