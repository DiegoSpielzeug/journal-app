import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

const firebaseConfig = {
    apiKey: "AIzaSyD_sAVy8d1vAqT9Ln1og_bs_ZLRMBpTT44",
    authDomain: "journal-app-25ae1.firebaseapp.com",
    projectId: "journal-app-25ae1",
    storageBucket: "journal-app-25ae1.appspot.com",
    messagingSenderId: "553029087227",
    appId: "1:553029087227:web:36c467d1569815f1e7255e",
    measurementId: "G-PQS5S8VP4L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
    db,
    googleAuthProvider,
    firebase
  }
