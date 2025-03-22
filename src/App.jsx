
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/aboutus/About';
import Gallery from './components/gallery/Gallery';
import  { useEffect } from "react";

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Ensures animation happens only once when scrolling down
    });
  }, []);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
