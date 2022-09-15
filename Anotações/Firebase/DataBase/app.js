// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJwH3LSwIRSPQXlEl7niBJIWNmRf9MJA",
  authDomain: "colegio-95a5a.firebaseapp.com",
  projectId: "colegio-95a5a",
  storageBucket: "colegio-95a5a.appspot.com",
  messagingSenderId: "486761914130",
  appId: "1:486761914130:web:64091c69c9c00aa4711dcb",
  measurementId: "G-FGYJHZCHVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
