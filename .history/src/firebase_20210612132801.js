import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
var firebaseConfig = {
    apiKey: "AIzaSyCO_4d1MikIezi8EssEfdlxGDy1BB3Vszs",
    authDomain: "ota-abo.firebaseapp.com",
    databaseURL: "https://ota-abo-default-rtdb.firebaseio.com",
    projectId: "ota-abo",
    storageBucket: "ota-abo.appspot.com",
    messagingSenderId: "373129814114",
    appId: "1:373129814114:web:ae4c23d23c2f28b745b13b",
    measurementId: "G-GR48CBJ2XV"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();


// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");

// export utils/refs
export { db, auth, usersCollection };
