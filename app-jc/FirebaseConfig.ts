// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh3Ez4KgWjFP92LUEWZb35Puk7SSdp8Mg",
  authDomain: "jardincocagne-f37ea.firebaseapp.com",
  projectId: "jardincocagne-f37ea",
  storageBucket: "jardincocagne-f37ea.firebasestorage.app",
  messagingSenderId: "753372043856",
  appId: "1:753372043856:web:7eaf3023e7d1d5ef534f55",
  measurementId: "G-VYV5P5BH4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  initializeAuth(app);