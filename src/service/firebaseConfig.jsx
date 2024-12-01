// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2KSNRFe9TsCCn4-aMGlv1_vEvHCQGWYk",
  authDomain: "tripsterai-4105a.firebaseapp.com",
  projectId: "tripsterai-4105a",
  storageBucket: "tripsterai-4105a.firebasestorage.app",
  messagingSenderId: "959548615593",
  appId: "1:959548615593:web:067b58225ca5405c9272b8",
  measurementId: "G-S7KC6TB0LB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
