// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJGUODMRmlLPmvi0QQkL5-jJVN-2tLTWI",
  authDomain: "gdsc-kmutt-website.firebaseapp.com",
  projectId: "gdsc-kmutt-website",
  storageBucket: "gdsc-kmutt-website.appspot.com",
  messagingSenderId: "323017173359",
  appId: "1:323017173359:web:3b3163d3298309208d609a",
  measurementId: "G-K4GQ6TGWQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const signIn = signInWithRedirect(auth, provider);

export default signIn