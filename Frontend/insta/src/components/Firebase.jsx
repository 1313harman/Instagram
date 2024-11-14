// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDGTQ4eKjN0TD6JMIP0asImrJoqFQ3xe7U",
  authDomain: "instagram-ee389.firebaseapp.com",
  projectId: "instagram-ee389",
  storageBucket: "instagram-ee389.appspot.com",
  messagingSenderId: "98284764362",
  appId: "1:98284764362:web:15fcf6ccef01f794ce4833"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app)
export const db = getFirestore(app)
const analytics = getAnalytics(app);
export default auth
