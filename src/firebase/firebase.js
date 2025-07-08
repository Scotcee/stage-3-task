// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebasekey from "../firebasekey.json";

const firebaseConfig = {
  apiKey: firebasekey.apiKey,
  authDomain: firebasekey.authDomain,
  projectId: firebasekey.projectId,
  storageBucket: firebasekey.storageBucket,
  messagingSenderId: "1049917831462", // hardcoded or move to firebasekey if needed
  appId: firebasekey.appId,
  measurementId: firebasekey.measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
