// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3fEEwarNLJm5qsRbVYaoY93mPxyTrylc",
  authDomain: "cosmi-base-shop.firebaseapp.com",
  databaseURL:
    "https://cosmi-base-shop-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cosmi-base-shop",
  storageBucket: "cosmi-base-shop.appspot.com",
  messagingSenderId: "346605594207",
  appId: "1:346605594207:web:53a7e70cf5a5baef7fddea",
  measurementId: "G-M2D456CCPR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
