import React from 'react';
import './Promotions.css';

const Promotions = () => {
  return (
    <div className="promo-card">
      <div className="promo-badge">Student Special</div>
      <h2>Get <span>20% Off</span> Your First Trip!</h2>
      <p>Verify your student ID and unlock exclusive discounts on top tropical destinations. Pack your bags and save big.</p>
      <button className="btn-book-promo">Claim Discount</button>
    </div>
  );
};

export default Promotions;