import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDYLVUdvuF386MTzZF5bVVWw24SFYCfaBg",
    authDomain: "gdsciub.firebaseapp.com",
    projectId: "gdsciub",
    storageBucket: "gdsciub.appspot.com",
    messagingSenderId: "900895338218",
    appId: "1:900895338218:web:f641d10cd9aee9e6d83193",
    measurementId: "G-J0Z3NXFRV3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export function signup(email, password) {
    signInWithEmailAndPassword(auth, email, password);
}

export { db, auth, storage };
export default db;