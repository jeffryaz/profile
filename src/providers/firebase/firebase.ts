import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCIBf33KqM1cT5pfLmkx_TGUnPnjKe-HCk",
  authDomain: "profile-web-a106f.firebaseapp.com",
  projectId: "profile-web-a106f",
  storageBucket: "profile-web-a106f",
  messagingSenderId: "124128771462",
  appId: "1:124128771462:web:dbc1e41c74a52c9083c007",
  measurementId: "G-1EW9VMMR79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };