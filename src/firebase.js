import * as firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optiona
const firebaseConfig = {
  apiKey: "AIzaSyAp7o6VXGwi5OFqNRKdxYNssCAEY3Xahjk",
  authDomain: "clone-df101.firebaseapp.com",
  projectId: "clone-df101",
  storageBucket: "clone-df101.appspot.com",
  messagingSenderId: "528630760536",
  appId: "1:528630760536:web:26520db38ce75e2c42f62d",
  measurementId: "G-V0N4VH7KHD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
