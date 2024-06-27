// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfRg5mG9UkUEswlu-F0uvzzwGWsKwW24k",
  authDomain: "vi-project-6af1a.firebaseapp.com",
  projectId: "vi-project-6af1a",
  storageBucket: "vi-project-6af1a.appspot.com",
  messagingSenderId: "405038791930",
  appId: "1:405038791930:web:a6a2f3c2e9caefcd3a9d43",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
