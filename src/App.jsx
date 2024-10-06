import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]); 
  const location = useLocation();
  const showNavBar = ["/home", "/shop", "/cart", "/contact"].includes(location.pathname.toLowerCase());

 
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert('Order successfully placed!');
  };

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} /> {/* Pass addToCart to Shop */}
        <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Pass cart items to Cart */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
