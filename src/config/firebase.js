import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDD9GRdAx-PLcOqPfbHwNqHFBJH5E31ga0",
    authDomain: "my-library-cyan.firebaseapp.com",
    projectId: "my-library-cyan",
    storageBucket: "my-library-cyan.appspot.com",
    messagingSenderId: "842817952110",
    appId: "1:842817952110:web:5d2ff6f4be0046575a897f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
