// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc-LLfqtet03Ii_IjRODOTKGNghK8UOYg",
  authDomain: "succusandplants-76c42.firebaseapp.com",
  projectId: "succusandplants-76c42",
  storageBucket: "succusandplants-76c42.appspot.com",
  messagingSenderId: "775478389325",
  appId: "1:775478389325:web:534ed3199f70ef7bfb0a04",
  measurementId: "G-DTVWNMNERT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const initFirestore =() => app