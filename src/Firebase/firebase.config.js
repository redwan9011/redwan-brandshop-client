// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEHZ15RA2gDubAy8bIdRKqK9ppvKdUtU",
  authDomain: "redwan-brandshop.firebaseapp.com",
  projectId: "redwan-brandshop",
  storageBucket: "redwan-brandshop.appspot.com",
  messagingSenderId: "470248393430",
  appId: "1:470248393430:web:2cf7161f09e061c8cd1777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app