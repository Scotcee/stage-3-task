// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASXed1K2uOHXHyxuKjTY7KGiBOk2ght4k",
  authDomain: "kode-camp-5.firebaseapp.com",
  projectId: "kode-camp-5",
  storageBucket: "kode-camp-5.firebasestorage.app",
  messagingSenderId: "1049917831462",
  appId: "1:1049917831462:web:5e19d6ff406979e004a9e7",
  measurementId: "G-RNQFJH96D5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
