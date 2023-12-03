// Import the functions you need from the SDKs you need
import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_3CoJH3obMUtl7GRt9erdIH80rsilgyk',
  authDomain: 'cafeteria-gourmet-a91e9.firebaseapp.com',
  projectId: 'cafeteria-gourmet-a91e9',
  storageBucket: 'cafeteria-gourmet-a91e9.appspot.com',
  messagingSenderId: '184193704226',
  appId: '1:184193704226:web:3c39cff7c465b8b1d4457b',
  measurementId: 'G-PJYSJVCHCK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
