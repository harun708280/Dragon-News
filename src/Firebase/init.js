// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjKyoDxeaCqXqN_y7lZkueAmxco78Ezzs",
  authDomain: "dragon-news-9f8e7.firebaseapp.com",
  projectId: "dragon-news-9f8e7",
  storageBucket: "dragon-news-9f8e7.firebasestorage.app",
  messagingSenderId: "348740572145",
  appId: "1:348740572145:web:f16a09b0349eca1911ea50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
