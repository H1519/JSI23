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
// TODO: Add SDKs for Firebase products that you want to use
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

// Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const storage = getStorage(app);
            const database = getDatabase(app);
 
 // Reference to the leaderboard data in Firebase
 var leaderboardRef = firebase.database().ref('hight_roll');
 
 // Function to load leaderboard data
 function loadLeaderboard() {
     leaderboardRef.orderByChild('score').limitToLast(10).on('value', function(snapshot) {
         var leaderboardBody = document.getElementById('leaderboardBody');
         leaderboardBody.innerHTML = ''; // Clear existing table content
         var rank = 1;
         snapshot.forEach(function(childSnapshot) {
             var data = childSnapshot.val();
             var row = `<tr>
                             <td>${rank}</td>
                             <td>${data.name}</td>
                             <td>${data.score}</td>
                        </tr>`;
             leaderboardBody.innerHTML += row;
             rank++;
         });
     });
 }
 
 // Load leaderboard when the page loads
 window.onload = loadLeaderboard;
 