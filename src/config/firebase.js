import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "my-library-beb31.firebaseapp.com",
    projectId: "my-library-beb31",
    storageBucket: "my-library-beb31.appspot.com",
    messagingSenderId: "592102972339",
    appId: "1:592102972339:web:96507623d4d577ba24c9c6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
