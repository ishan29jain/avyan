import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAJv41ohyHEzDqDXBhQMqFEHg8IYYSD1iQ",
  authDomain: "avyan-cd38a.firebaseapp.com",
  projectId: "avyan-cd38a",
  storageBucket: "avyan-cd38a.appspot.com",
  messagingSenderId: "180155529253",
  appId: "1:180155529253:web:8ec75b4ca00d299b6e67cc",
  measurementId: "G-B47B6H0Y9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Export Firestore and Storage instances to use in other files
export { db, storage };
