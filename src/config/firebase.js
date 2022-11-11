import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjq9HSvpNdqdfYSg37VpZJ4dwcTbnfrHQ",
    authDomain: "my-library-1d89b.firebaseapp.com",
    projectId: "my-library-1d89b",
    storageBucket: "my-library-1d89b.appspot.com",
    messagingSenderId: "166461716416",
    appId: "1:166461716416:web:e8a0b774ea884d7d937a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
