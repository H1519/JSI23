// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let password_register = document.getElementById("password_input_register");
let password1_register = document.getElementById("password1_input_register");
let username_register = document.getElementById("username_input_register");
let username1_register = document.getElementById("username1_input_register");
let register_btn = document.getElementById("register_btn");

// Đăng ký 1 tài khoản
register_btn.addEventListener("click", function () {
  let username = username_register.value;
  let username1 = username1_register.value;
  let password = password_register.value;
  let password1 = password1_register.value;


  createUserWithEmailAndPassword(auth, username, password,username1,password1)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, "user/" + user.uid), {
        username: username,
        password: password,
        username1: username1,
        password1: password1,
      });
    alert("Tạo tài khoản thành công");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});