// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBHie3kr1P989rY-jyn8lqt7ttaKdEj9ps",
  authDomain: "database102.firebaseapp.com",
  projectId: "database102",
  storageBucket: "database102.appspot.com",
  messagingSenderId: "262438874063",
  appId: "1:262438874063:web:cc880892a0dfb70e67c0ba",
  measurementId: "G-VZ57ETXMZW",
});

const db = getFirestore(firebaseApp);
export default db;