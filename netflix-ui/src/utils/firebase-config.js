
import { initializeApp } from "firebase/app";
// import { getauth } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi_OZMo0OyJy5PKmpwluYj3pRrMIOrQuY",
  authDomain: "react-netflix-clone-f1467.firebaseapp.com",
  projectId: "react-netflix-clone-f1467",
  storageBucket: "react-netflix-clone-f1467.appspot.com",
  messagingSenderId: "578753314896",
  appId: "1:578753314896:web:321872c7ca16031a41d155",
  measurementId: "G-6VBF3B8W41"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);