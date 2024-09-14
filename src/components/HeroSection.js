// src/components/HeroSection.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const HeroSection = () => {
  return (
    <section className="text-center py-16">
      <h1 className="text-5xl font-bold mb-4">Respond Faster, Act Smarter</h1>
      <p className="text-lg mb-8">A comprehensive platform that enables real-time reporting and communication during disasters.</p>
      <a href="#report-section" className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full hover:bg-gray-200">
        Report Now
      </a>
      
      {/* Leaflet Map */}
      {/* <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '400px', width: '100%', marginTop: '2rem' }}
        >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            You are here.
          </Popup>
        </Marker>
      </MapContainer> */}
    </section>
  );
}

export default HeroSection;
