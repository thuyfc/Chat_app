import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA7AH_3kXWTKmdpwFWAdzl3bRC7gAsCEx0",
  authDomain: "chat-app-a0f92.firebaseapp.com",
  projectId: "chat-app-a0f92",
  storageBucket: "chat-app-a0f92.appspot.com",
  messagingSenderId: "115718736372",
  appId: "1:115718736372:web:9f938b54452bec4e2bd1a1",
  measurementId: "G-ZQ0MD733JB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
