// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// type your own config
const firebaseConfig = {
    apiKey: "AIzaSyDYm-AF9IhN1Zh_1fhxIxJJ7rJLfkPgLHA",
    authDomain: "dostavka-d565c.firebaseapp.com",
    projectId: "dostavka-d565c",
    storageBucket: "dostavka-d565c.appspot.com",
    messagingSenderId: "451859585467",
    appId: "1:451859585467:web:9bcd68e5ed8c724c3d0c9e",
    measurementId: "G-N1GMMBX959"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

export { auth, storage, googleAuthProvider, facebookAuthProvider, githubAuthProvider };
