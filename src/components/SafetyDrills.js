// src/components/SafetyDrills.js
import React from 'react';

const SafetyDrills = () => {
  return (
    <section id="safety-drills" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
      <h2 className="text-3xl font-bold text-center mb-8">In times of disaster, quick access to safety information and emergency contacts is crucial.</h2>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 bg-purple-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Find Nearby Safe Areas:</h3>
            <ul className="list-disc list-inside">
              <li>Location-based safe zones and shelters</li>
              <li>Regularly updated data from government sources</li>
              <li>Guidance to the nearest protection areas</li>
            </ul>
          </div>

          <div className="flex-1 bg-purple-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Emergency Contacts:</h3>
            <ul className="list-disc list-inside">
              <li>Direct access to emergency numbers</li>
              <li>Local authorities, hospitals, and fire departments</li>
              <li>Ability to call or message from the platform</li>
            </ul>
          </div>

          <div className="flex-1 bg-purple-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">First Aid Procedures:</h3>
            <ul className="list-disc list-inside">
              <li>Step-by-step guides for various conditions</li>
              <li>Offline access to important information</li>
              <li>Multiple language support</li>
            </ul>
          </div>

          <div className="flex-1 bg-purple-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Safety Drills:</h3>
            <ul className="list-disc list-inside">
              <li>Virtual drills for emergency preparedness</li>
              <li>Regular tips for disaster readiness</li>
              <li>Practice emergency protocols</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetyDrills;
