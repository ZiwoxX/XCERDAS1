// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCEue_cMeBg1B0PIPS6knYoiXvMJtJxZxI",
  authDomain: "website-25711.firebaseapp.com",
  projectId: "website-25711",
  storageBucket: "website-25711.appspot.com",
  messagingSenderId: "38660762483",
  appId: "1:38660762483:web:630e2519fcd66e77ceb306",
  measurementId: "G-H3GN7T8KN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();