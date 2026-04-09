import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    destination: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${formData.name} to ${formData.destination} on ${formData.date}!`);
    setFormData({ name: '', email: '', date: '', destination: '' });
  };

  return (
    <div className="booking-section">
      <div className="booking-form-container">
        <h2>Book Your <span>Dream Trip</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
          </div>
          <div className="input-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" />
          </div>
          <div className="form-row">
            <div className="input-group">
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <select name="destination" value={formData.destination} onChange={handleChange} required>
                <option value="" disabled>Select Destination</option>
                
                <optgroup label="Europe">
                  <option value="Paris, France">Paris, France</option>
                  <option value="Rome, Italy">Rome, Italy</option>
                  <option value="London, United Kingdom">London, United Kingdom</option>
                  <option value="Barcelona, Spain">Barcelona, Spain</option>
                  <option value="Amsterdam, Netherlands">Amsterdam, Netherlands</option>
                  <option value="Florence, Italy">Florence, Italy</option>
                  <option value="Prague, Czech Republic">Prague, Czech Republic</option>
                  <option value="Santorini, Greece">Santorini, Greece</option>
                  <option value="Venice, Italy">Venice, Italy</option>
                  <option value="Berlin, Germany">Berlin, Germany</option>
                  <option value="Lisbon, Portugal">Lisbon, Portugal</option>
                  <option value="Vienna, Austria">Vienna, Austria</option>
                  <option value="Edinburgh, Scotland">Edinburgh, Scotland</option>
                  <option value="Dubrovnik, Croatia">Dubrovnik, Croatia</option>
                  <option value="Madrid, Spain">Madrid, Spain</option>
                  <option value="Reykjavik, Iceland">Reykjavik, Iceland</option>
                  <option value="Athens, Greece">Athens, Greece</option>
                  <option value="Munich, Germany">Munich, Germany</option>
                  <option value="Budapest, Hungary">Budapest, Hungary</option>
                  <option value="Zurich, Switzerland">Zurich, Switzerland</option>
                  <option value="Seville, Spain">Seville, Spain</option>
                  <option value="Copenhagen, Denmark">Copenhagen, Denmark</option>
                  <option value="Oslo, Norway">Oslo, Norway</option>
                  <option value="Stockholm, Sweden">Stockholm, Sweden</option>
                  <option value="Nice, France">Nice, France</option>
                  <option value="Dublin, Ireland">Dublin, Ireland</option>
                  <option value="Amalfi Coast, Italy">Amalfi Coast, Italy</option>
                  <option value="Brussels, Belgium">Brussels, Belgium</option>
                  <option value="Krakow, Poland">Krakow, Poland</option>
                  <option value="Lucerne, Switzerland">Lucerne, Switzerland</option>
                </optgroup>

                <optgroup label="Asia & The Middle East">
                  <option value="Tokyo, Japan">Tokyo, Japan</option>
                  <option value="Bangkok, Thailand">Bangkok, Thailand</option>
                  <option value="Dubai, United Arab Emirates">Dubai, United Arab Emirates</option>
                  <option value="Bali, Indonesia">Bali, Indonesia</option>
                  <option value="Kyoto, Japan">Kyoto, Japan</option>
                  <option value="Singapore, Singapore">Singapore, Singapore</option>
                  <option value="Seoul, South Korea">Seoul, South Korea</option>
                  <option value="Hong Kong, China">Hong Kong, China</option>
                  <option value="Istanbul, Turkey">Istanbul, Turkey</option>
                  <option value="Siem Reap, Cambodia">Siem Reap, Cambodia</option>
                  <option value="Phuket, Thailand">Phuket, Thailand</option>
                  <option value="Hanoi, Vietnam">Hanoi, Vietnam</option>
                  <option value="Mumbai, India">Mumbai, India</option>
                  <option value="Petra, Jordan">Petra, Jordan</option>
                  <option value="Maldives, Maldives">Maldives, Maldives</option>
                  <option value="Osaka, Japan">Osaka, Japan</option>
                  <option value="Taipei, Taiwan">Taipei, Taiwan</option>
                  <option value="Beijing, China">Beijing, China</option>
                  <option value="Kuala Lumpur, Malaysia">Kuala Lumpur, Malaysia</option>
                  <option value="Jaipur, India">Jaipur, India</option>
                  <option value="Hoi An, Vietnam">Hoi An, Vietnam</option>
                  <option value="Doha, Qatar">Doha, Qatar</option>
                  <option value="Abu Dhabi, United Arab Emirates">Abu Dhabi, United Arab Emirates</option>
                  <option value="Boracay, Philippines">Boracay, Philippines</option>
                  <option value="Luang Prabang, Laos">Luang Prabang, Laos</option>
                  <option value="Kathmandu, Nepal">Kathmandu, Nepal</option>
                  <option value="Muscat, Oman">Muscat, Oman</option>
                  <option value="Tel Aviv, Israel">Tel Aviv, Israel</option>
                  <option value="Chiang Mai, Thailand">Chiang Mai, Thailand</option>
                  <option value="Jerusalem, Israel">Jerusalem, Israel</option>
                </optgroup>

                <optgroup label="The Americas">
                  <option value="New York City, USA">New York City, USA</option>
                  <option value="Rio de Janeiro, Brazil">Rio de Janeiro, Brazil</option>
                  <option value="Machu Picchu, Peru">Machu Picchu, Peru</option>
                  <option value="Vancouver, Canada">Vancouver, Canada</option>
                  <option value="Cancun, Mexico">Cancun, Mexico</option>
                  <option value="San Francisco, USA">San Francisco, USA</option>
                  <option value="Buenos Aires, Argentina">Buenos Aires, Argentina</option>
                  <option value="Toronto, Canada">Toronto, Canada</option>
                  <option value="Havana, Cuba">Havana, Cuba</option>
                  <option value="Los Angeles, USA">Los Angeles, USA</option>
                  <option value="Quebec City, Canada">Quebec City, Canada</option>
                  <option value="Mexico City, Mexico">Mexico City, Mexico</option>
                  <option value="Cusco, Peru">Cusco, Peru</option>
                  <option value="Cartagena, Colombia">Cartagena, Colombia</option>
                  <option value="Las Vegas, USA">Las Vegas, USA</option>
                  <option value="Honolulu, USA">Honolulu, USA</option>
                  <option value="Montreal, Canada">Montreal, Canada</option>
                  <option value="Santiago, Chile">Santiago, Chile</option>
                  <option value="New Orleans, USA">New Orleans, USA</option>
                  <option value="Antigua, Guatemala">Antigua, Guatemala</option>
                  <option value="Chicago, USA">Chicago, USA</option>
                  <option value="Galapagos Islands, Ecuador">Galapagos Islands, Ecuador</option>
                  <option value="Miami, USA">Miami, USA</option>
                  <option value="San Jose, Costa Rica">San Jose, Costa Rica</option>
                  <option value="Washington, D.C., USA">Washington, D.C., USA</option>
                </optgroup>

                <optgroup label="Africa & Oceania">
                  <option value="Sydney, Australia">Sydney, Australia</option>
                  <option value="Cape Town, South Africa">Cape Town, South Africa</option>
                  <option value="Auckland, New Zealand">Auckland, New Zealand</option>
                  <option value="Marrakech, Morocco">Marrakech, Morocco</option>
                  <option value="Cairo, Egypt">Cairo, Egypt</option>
                  <option value="Melbourne, Australia">Melbourne, Australia</option>
                  <option value="Queenstown, New Zealand">Queenstown, New Zealand</option>
                  <option value="Nairobi, Kenya">Nairobi, Kenya</option>
                  <option value="Bora Bora, French Polynesia">Bora Bora, French Polynesia</option>
                  <option value="Serengeti, Tanzania">Serengeti, Tanzania</option>
                  <option value="Victoria Falls, Zimbabwe/Zambia">Victoria Falls, Zimbabwe/Zambia</option>
                  <option value="Gold Coast, Australia">Gold Coast, Australia</option>
                  <option value="Fiji, Fiji">Fiji, Fiji</option>
                  <option value="Kruger National Park, South Africa">Kruger National Park, South Africa</option>
                  <option value="Mauritius, Mauritius">Mauritius, Mauritius</option>
                </optgroup>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;