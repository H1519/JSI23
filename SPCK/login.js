// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
     getStorage,
     uploadBytes,
     getDownloadURL,
     ref as dbRefImage,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import {
     get,
     getDatabase,
     set,
     ref,
     onValue,
     update,
     remove,
     push,
     child,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDTM43DRmlkEGdyWPgBkRSjWyYfIyF5np0",
     authDomain: "cuoikhoa-82272.firebaseapp.com",
     projectId: "cuoikhoa-82272",
     storageBucket: "cuoikhoa-82272.appspot.com",
     messagingSenderId: "88357534559",
     appId: "1:88357534559:web:e88aa539892ea9b348d4ea",
     measurementId: "G-P9FLW9YKH8"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const compareBtn1 = document.getElementById("compareBtn1");
compareBtn1.addEventListener("click", Credentials1);
function Credentials1() {
     const email1 = document.getElementById("email1").value;
     const password1 = document.getElementById("password1").value;
     const cont = document.getElementsByClassName("cont");

     signInWithEmailAndPassword(auth, email1, password1)
          .then((userCredential) => {
               const user = userCredential.user;
               let date = new Date();
               update(ref(database, "user/" + user.uid), {
                    lastLogin: date,
               });
               localStorage.setItem("username1", email1);
               alert("Đăng nhập thành công111");
          });
     }; 
const compareBtn = document.getElementById("compareBtn");
compareBtn.addEventListener("click", Credential2);
function Credential2() {
     const email2 = document.getElementById("email2").value;
     const password2 = document.getElementById("password2").value;
     signInWithEmailAndPassword(auth, email2, password2)
          .then(async(userCredential1) => {
               const user = userCredential1.user;
               let date1 = new Date();
               update(ref(database, "user/" + user.uid), {
                    lastLogin: date1,
               });
               localStorage.setItem("username2", email2);
               alert("Đăng nhập thành công");
          });
     };
