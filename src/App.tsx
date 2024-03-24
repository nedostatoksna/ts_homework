import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserPage from './UserPage';
import WeatherPage from './WeatherPage';
import CityPage from './CityPage';

function App() {
  return (
    <>
     <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User Page</Link></li>
          <li><Link to="/weather">Weather Page</Link></li>
          <li><Link to="/city">City Page</Link></li>
        </ul>
      </nav>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/city" element={<CityPage />} />
    </Routes>
    </>
  );
}

export default App;
