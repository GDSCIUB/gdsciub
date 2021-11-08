import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDYLVUdvuF386MTzZF5bVVWw24SFYCfaBg",
    authDomain: "gdsciub.firebaseapp.com",
    projectId: "gdsciub",
    storageBucket: "gdsciub.appspot.com",
    messagingSenderId: "900895338218",
    appId: "1:900895338218:web:f641d10cd9aee9e6d83193",
    measurementId: "G-J0Z3NXFRV3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
export default firebase;