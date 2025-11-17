// Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import BecomeSeller from '../pages/BecomeSeller';
import SignupPage from '../pages/SignupPage';
import Profile from '../pages/Profile';
import Notification from '../pages/Notification';


function AppRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/become-seller" element={<BecomeSeller />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    
  );
}

export default AppRouter;
