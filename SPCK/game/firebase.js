// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,  update,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTM43DRmlkEGdyWPgBkRSjWyYfIyF5np0",
    authDomain: "cuoikhoa-82272.firebaseapp.com",
    databaseURL: "https://cuoikhoa-82272-default-rtdb.firebaseio.com",
    projectId: "cuoikhoa-82272",
    storageBucket: "cuoikhoa-82272.appspot.com",
    messagingSenderId: "88357534559",
    appId: "1:88357534559:web:e88aa539892ea9b348d4ea",
    measurementId: "G-P9FLW9YKH8"
  };
firebase.initializeApp(firebaseConfig);