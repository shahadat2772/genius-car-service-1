// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6kncaOd-CbLFsA6ayaHCW_bidalvatyU",
  authDomain: "genius-car-services-1-2600a.firebaseapp.com",
  projectId: "genius-car-services-1-2600a",
  storageBucket: "genius-car-services-1-2600a.appspot.com",
  messagingSenderId: "671425596744",
  appId: "1:671425596744:web:615a9c93a9bcbae4f3377d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
