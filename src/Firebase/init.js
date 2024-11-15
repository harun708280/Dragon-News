
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBjKyoDxeaCqXqN_y7lZkueAmxco78Ezzs",
  authDomain: "dragon-news-9f8e7.firebaseapp.com",
  projectId: "dragon-news-9f8e7",
  storageBucket: "dragon-news-9f8e7.firebasestorage.app",
  messagingSenderId: "348740572145",
  appId: "1:348740572145:web:f16a09b0349eca1911ea50"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
