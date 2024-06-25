// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHW4Fcbg6Yp2yXpseFgGqpVtH57cmU7Aw",
    authDomain: "react-reduxproject-47a12.firebaseapp.com",
    projectId: "react-reduxproject-47a12",
    storageBucket: "react-reduxproject-47a12.appspot.com",
    messagingSenderId: "973728752264",
    appId: "1:973728752264:web:51894cbfe558979276353d",
    measurementId: "G-2K41DQ3VK4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);