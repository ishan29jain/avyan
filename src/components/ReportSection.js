import React, { useState } from 'react';
import { db, storage } from '../firebase'; // Import `db` and `storage` from firebase.js
import { collection, addDoc, GeoPoint } from 'firebase/firestore'; // Import Firestore functions and GeoPoint
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions

const ReportSection = () => {
  const [geoLocation, setGeoLocation] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for loader

  // Handle file input change
  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const disasterType = event.target['disaster-type'].value;
    const intensity = event.target.intensity.value;
    const location = event.target.location.value;

    try {
      setIsLoading(true); // Show loader
      const geoPoint = geoLocation || new GeoPoint(0, 0); // Default to (0, 0) if geolocation is not set

      // Initialize image URL
      let imageUrl = '';

      // If image file is selected, upload it to Firebase Storage
      if (imageFile) {
        const imageRef = ref(storage, `images/${imageFile.name}`);
        
        // Upload the image file to Firebase Storage
        await uploadBytes(imageRef, imageFile);
        
        // Get the download URL for the uploaded image
        imageUrl = await getDownloadURL(imageRef);
      }

      // Add the form data to Firestore with the image URL (if provided)
      await addDoc(collection(db, "disasterReports"), {
        description,
        disasterType,
        intensity,
        location,
        geoPoint,
        timestamp: new Date(),
        imageUrl, // Store the image URL
      });

      // Success alert
      alert('Disaster reported successfully!');
    } catch (error) {
      // Error handling
      console.error("Error adding document: ", error);
      alert('Error submitting report. Please try again.');
    } finally {
      setIsLoading(false); // Hide loader after upload completes
    }
  };

  // Get user's geolocation
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setGeoLocation(new GeoPoint(lat, lng)); // Store GeoPoint
        },
        (error) => {
          console.error("Error getting location", error);
          alert("Could not get your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Use effect to get user's location when the component mounts
  React.useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <section id="report-section" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Report a Disaster Incident</h2>
      
      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center items-center mb-4">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
          <p className="text-lg font-semibold text-blue-500 ml-4">Uploading...</p>
        </div>
      )}
      
      {/* Form */}
      <form id="report-form" className="bg-purple-700 text-white p-8 rounded-lg shadow-lg text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-semibold mb-2">Description:</label>
          <textarea id="description" className="w-full p-3 border border-gray-300 rounded-lg text-black" placeholder="Describe the situation..." required></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="disaster-type" className="block text-lg font-semibold mb-2">Disaster Type:</label>
          <input type="text" id="disaster-type" className="w-full p-3 border border-gray-300 rounded-lg text-black" placeholder="Type of disaster" required />
        </div>

        <div className="mb-4">
          <label htmlFor="intensity" className="block text-lg font-semibold mb-2">Intensity Level:</label>
          <select id="intensity" className="w-full p-3 border border-gray-300 rounded-lg text-black" required>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-lg font-semibold mb-2">Location:</label>
          <input type="text" id="location" className="w-full p-3 border border-gray-300 rounded-lg text-black" placeholder="Enter the location" required />
        </div>

        <div className="mb-4">
          <label htmlFor="image-upload" className="block text-lg font-semibold mb-2">Upload Image:</label>
          <input type="file" id="image-upload" className="w-full p-3 border border-gray-300 rounded-lg" accept="image/*" onChange={handleFileChange} />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>
    </section>
  );
};

export default ReportSection;
