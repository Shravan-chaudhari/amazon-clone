import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDteFSLkkFEB4ALure8URDKNGmQ8fszV1w",
  authDomain: "clone-f044e.firebaseapp.com",
  projectId: "clone-f044e",
  storageBucket: "clone-f044e.appspot.com",
  messagingSenderId: "67269493539",
  appId: "1:67269493539:web:a6b806b742460b57448296",
  measurementId: "G-DCSS6V9GFH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
