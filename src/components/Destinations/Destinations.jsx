import React, { useState, useEffect } from 'react';
import './Destinations.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/19e5009c-c751-4324-a3fe-3a29d46587f2_destinationData.json');
        const data = await response.json();
        // Assuming the API returns an array directly. If it's nested (e.g., data.destinations), adjust accordingly.
        setDestinations(Array.isArray(data) ? data : data.destinations || []);
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="destinations-section">
      <div className="destinations-header">
        <h2>Popular <span>Destinations</span></h2>
        <input 
          type="text" 
          placeholder="Search destinations..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : filteredDestinations.length > 0 ? (
        <div className="destinations-grid">
          {filteredDestinations.map((dest, index) => (
            <div className="dest-card" key={index}>
              <div className="dest-image-wrapper">
                <img src={dest.image_url || dest.image} alt={dest.name} />
                {dest.tag && <span className="dest-tag">{dest.tag}</span>}
              </div>
              <div className="dest-info">
                <h3>{dest.name}</h3>
                <p className="location">📍 {dest.location}</p>
                <div className="rating">⭐ {dest.rating}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data">
          <h3>No such destination</h3>
          <p>Try searching for something else!</p>
        </div>
      )}
    </section>
  );
};

export default Destinations;