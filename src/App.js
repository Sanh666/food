import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOder from './pages/PlaceOder/PlaceOder';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoginPopup from './LoginPopup/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOder />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
