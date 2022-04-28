// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA6kncaOd-CbLFsA6ayaHCW_bidalvatyU",
//   authDomain: "genius-car-services-1-2600a.firebaseapp.com",
//   projectId: "genius-car-services-1-2600a",
//   storageBucket: "genius-car-services-1-2600a.appspot.com",
//   messagingSenderId: "671425596744",
//   appId: "1:671425596744:web:615a9c93a9bcbae4f3377d",
// };
const firebaseConfig = {
  apiKey: "AIzaSyADKtpWq2rGEQYNHHa6TXyCWr5seD0K6D0",
  authDomain: "genius-car-services-b294e.firebaseapp.com",
  projectId: "genius-car-services-b294e",
  storageBucket: "genius-car-services-b294e.appspot.com",
  messagingSenderId: "963269149539",
  appId: "1:963269149539:web:6458935202f7b3d6318956",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
