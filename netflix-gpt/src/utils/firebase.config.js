// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW58lQPAK5U7QKIg7UzpCZr9q1X4WksXY",
  authDomain: "netflix-gpt-eb359.firebaseapp.com",
  projectId: "netflix-gpt-eb359",
  storageBucket: "netflix-gpt-eb359.appspot.com",
  messagingSenderId: "682835039570",
  appId: "1:682835039570:web:c09dab3c95b445bf0b568b",
  measurementId: "G-PT4MHFLEMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const Auth = getAuth();