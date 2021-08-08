import firebase from 'firebase';

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

export default firebase;