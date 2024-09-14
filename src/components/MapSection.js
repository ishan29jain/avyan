// src/components/MapSection.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/custom-marker.png';

const MapSection = () => {
  useEffect(() => {
    // Initialize the map and set default view
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Load OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Define custom icon
    const customIcon = L.icon({
      iconUrl: markerIcon, // Path to the custom icon
      iconSize: [40, 40], // Size of the icon [width, height]
      iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -40], // Point where the popup will open relative to the iconAnchor
    });

    // Show user's live location
    const showLiveLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Add a marker with the custom icon at the user's current location
            const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map)
              .bindPopup("You are here").openPopup();

            // Set the map view to the user's location
            map.setView([lat, lng], 13);
          },
          (error) => {
            console.error(error);
            alert("Unable to retrieve your location. Please ensure GPS is enabled.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    };

    showLiveLocation();
  }, []);

  return (
    <section id="map-section" className="bg-white text-black p-8 rounded-lg shadow-lg container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Disaster-Prone Areas</h2>
      <div id="map" className="rounded-lg" style={{ height: '400px', width: '100%' }}></div>
    </section>
  );
};

export default MapSection;
