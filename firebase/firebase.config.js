// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7hp6X-X7NwJnQNGBFXgHsJcyIybxr11s",
  authDomain: "internee-af328.firebaseapp.com",
  projectId: "internee-af328",
  storageBucket: "internee-af328.appspot.com",
  messagingSenderId: "534790729111",
  appId: "1:534790729111:web:70354986c47f3aae33e8d2",
  measurementId: "G-PW8D9ESE7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);