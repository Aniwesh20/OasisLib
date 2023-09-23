import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDO5oYErJRMkseSY5Tuz_nMlmT1o84tj-E",
    authDomain: "booklib-e935e.firebaseapp.com",
    projectId: "booklib-e935e",
    storageBucket: "booklib-e935e.appspot.com",
    messagingSenderId: "460913933768",
    appId: "1:460913933768:web:d64b1aa15e8cac129214fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };