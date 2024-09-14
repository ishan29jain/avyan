// src/components/FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-white text-black rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Real-Time Reporting</h3>
          <p>Report live conditions such as flood levels, blocked roads, or medical emergencies.</p>
        </div>
        <div className="p-6 bg-white text-black rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Geo-Tagged Data</h3>
          <p>Reports are geo-tagged with the exact location of incidents.</p>
        </div>
        <div className="p-6 bg-white text-black rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Resource Management</h3>
          <p>Efficiently allocate resources based on aggregated data.</p>
        </div>
        <div className="p-6 bg-white text-black rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Communication with Responders</h3>
          <p>Facilitate two-way communication between affected individuals and rescue teams.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
