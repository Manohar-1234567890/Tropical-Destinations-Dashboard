import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Featured from './components/Featured/Featured.jsx';
import Destinations from './components/Destinations/Destinations.jsx';
import Promotions from './components/Promotions/Promotions.jsx';
import BookingForm from './components/BookingForm/BookingForm.jsx';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Featured />
        <Destinations />
        <div className="bottom-section">
          <Promotions />
          <BookingForm />
        </div>
      </main>
    </div>
  );
};

export default App;