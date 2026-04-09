import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-container" id="home">
      <div className="featured-content">
        <h1>Discover Your Next <span>Tropical Getaway</span></h1>
        <p>Explore breathtaking beaches, vibrant cultures, and unforgettable adventures. Your dream vacation is just a click away.</p>
        <button className="btn-see-more">See More</button>
      </div>
      <div className="featured-image">
        <div className="image-placeholder">
           {/* Fallback pattern/gradient if no actual image is used */}
        </div>
      </div>
    </section>
  );
};

export default Featured;