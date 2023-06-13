import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2y6oco6nRDvFtVrru-XVLaZVkYQESZh8",
  authDomain: "house-marketplace-app-7f64f.firebaseapp.com",
  projectId: "house-marketplace-app-7f64f",
  storageBucket: "house-marketplace-app-7f64f.appspot.com",
  messagingSenderId: "632580753685",
  appId: "1:632580753685:web:ac43d2c3b3db6f7fa3c11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()