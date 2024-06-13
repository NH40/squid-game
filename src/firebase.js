// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyAUbOGgLBEheWVuP2EvRMzS4pREkh7g0Lk",
  authDomain: "squid-game-b17b6.firebaseapp.com",
  projectId: "squid-game-b17b6",
  storageBucket: "squid-game-b17b6.appspot.com",
  messagingSenderId: "1099190724403",
  appId: "1:1099190724403:web:0d7089bc3304fe59598046"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();