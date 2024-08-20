// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Fcw3dI7fmRX8guyY81oFOB0JCfKeT6M",
  authDomain: "business-directory-c906b.firebaseapp.com",
  projectId: "business-directory-c906b",
  storageBucket: "business-directory-c906b.appspot.com",
  messagingSenderId: "506395791449",
  appId: "1:506395791449:web:149c1319d6396f2ae6a148",
  measurementId: "G-78DKFE7L78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);
