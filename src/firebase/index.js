import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV4ixy4OIW2VEiimiZRVROdhjgat1Efd0",
  authDomain: "marriage-station.firebaseapp.com",
  projectId: "marriage-station",
  storageBucket: "marriage-station.appspot.com",
  messagingSenderId: "922584677371",
  appId: "1:922584677371:web:a1d3e4ac221d40d52ea95e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
