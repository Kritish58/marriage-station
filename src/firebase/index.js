import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Constants from "../constants";

const firebaseConfig = {
  apiKey: Constants.env.FIREBASE_API_KEY,
  authDomain: Constants.env.FIREBASE_AUTH_DOMAIN,
  projectId: Constants.env.FIREBASE_PROJECT_ID,
  storageBucket: Constants.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constants.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: Constants.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
