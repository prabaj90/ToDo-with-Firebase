// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyA1U9fKVdGTreKXEjGPwHXhvzfoZ5jRNQY",
//     authDomain: "todo-app-cp-5b171.firebaseapp.com",
//     projectId: "todo-app-cp-5b171",
//     storageBucket: "todo-app-cp-5b171.appspot.com",
//     messagingSenderId: "549396384779",
//     appId: "1:549396384779:web:0490fa4a945b2aac024b0e",
//     measurementId: "G-8DTGFVDY5K"
//   };
 
import firebase from 'firebase';
// import 'firebase/firestore';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1U9fKVdGTreKXEjGPwHXhvzfoZ5jRNQY",
    authDomain: "todo-app-cp-5b171.firebaseapp.com",
    projectId: "todo-app-cp-5b171",
    storageBucket: "todo-app-cp-5b171.appspot.com",
    messagingSenderId: "549396384779",
    appId: "1:549396384779:web:0490fa4a945b2aac024b0e",
    measurementId: "G-8DTGFVDY5K"
});

const db = firebaseApp.firestore();

export default db;