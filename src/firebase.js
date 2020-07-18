import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANIBzuNokkdp-vYterHSVM6Ue-XieHmqo",
  authDomain: "clone-36194.firebaseapp.com",
  databaseURL: "https://clone-36194.firebaseio.com",
  projectId: "clone-36194",
  storageBucket: "clone-36194.appspot.com",
  messagingSenderId: "693714138258",
  appId: "1:693714138258:web:c39edf086dc43c9d30a24b",
  measurementId: "G-7LP769MJGQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
