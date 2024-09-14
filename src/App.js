// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ReportSection from './components/ReportSection';
import SafetyDrills from './components/SafetyDrills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <Navbar />
      <HeroSection />
      <MapSection />
      <AboutSection />
      <FeaturesSection />
      <ReportSection />
      <SafetyDrills />
      <Footer />
    </div>
  );
}

export default App;
