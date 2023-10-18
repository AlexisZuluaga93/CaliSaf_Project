// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPvfYCXMYnEjR8emAUMgv6qE1oMAMOFMI",
  authDomain: "calisafe-unicatolica-18417.firebaseapp.com",
  projectId: "calisafe-unicatolica-18417",
  storageBucket: "calisafe-unicatolica-18417.appspot.com",
  messagingSenderId: "58052101440",
  appId: "1:58052101440:web:019510a64a53cb4808e6a5",
  measurementId: "G-H28RK3P650",
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);
const auth = getAuth(initFirebase);

export { initFirebase, auth };

export const db = getFirestore(initFirebase);
