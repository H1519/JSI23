// Import các hàm bạn cần từ các SDK bạn muốn sử dụng
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import {
  get,
  getDatabase,
  set,
  ref as dbRef,
  onValue,
  update,
  remove,
  child,
  push, // Chuyển dòng import này từ firebase-storage.js sang firebase-database.js
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


// ... (phần còn lại của mã nguồn của bạn vẫn giữ nguyên)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeDqu_I1NKuYxCM-JDEg3F_nrXCiOgRzw",
  authDomain: "jsb23-ab6d5.firebaseapp.com",
  databaseURL: "https://jsb23-ab6d5-default-rtdb.firebaseio.com",
  projectId: "jsb23-ab6d5",
  storageBucket: "jsb23-ab6d5.appspot.com",
  messagingSenderId: "733919925100",
  appId: "1:733919925100:web:35a9015d784141c7da9949",
  measurementId: "G-DVH9M55C58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);
let user_name_input = document.getElementById("user_name");
let user_age_input = document.getElementById("user_age");
let user_favor_input = document.getElementById("user_favor");
let add_user_btn = document.getElementById("add_user");
let read_data = document.getElementById("read_data");
let update_btn = document.getElementById("update");
let delete_btn = document.getElementById("delete");
let user_avata = document.getElementById("user_avata");

////////////////////////////////////////////////////////// upload image
// upload image
const fileInput = document.getElementById("fileInput"); // Input element for file selection
const imageGallery = document.getElementById("imageGallery"); // Container for displaying images
var file = "";

fileInput.addEventListener("change", async function (e) {
  file = e.target.files[0]; // Get the selected file
});


let upload_image_btn = document.getElementById("uploadImage");
upload_image_btn.addEventListener("click", async function () {
  // Create a storage reference
  const storageRef = ref(storage, "images/" + file.name);
  try {
    // Upload file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);
    // Get the download URL after successful upload
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log(downloadURL);
    // Store downloadURL in Firebase Database for retrieval
    const dbImagesRef = dbRef(database, "images");
    push(dbImagesRef, {
      imageURL: downloadURL,
    });
    // Display images
    let img = document.createElement("img");
    img.src = downloadURL;
    img.addEventListener("load", function () {
      // Add the image to the imageGallery when it's loaded
      img.style.width = "100px";
      img.style.height = "100px";
      imageGallery.appendChild(img);
    });
  } catch (error) {
    // Handle any errors while uploading
    console.error(error);
  }
});
    
// Create
    add_user_btn.addEventListener("click", function () {
      // let userRef = ref(database, "users/" + user_name_input.value);
    
      const dbRef = ref(getDatabase());
    
      get(child(dbRef, `users/${user_name_input.value}`)).then((snapshot) => {
        // nếu tên người dùng bạn nhập trùng với tên có rồi trong firebase thì snap.exists() == true
        // => Lúc này mình thể add 1 user có tên như vậy nữa
        // nếu tên người dùng bạn nhập trùng ko với tên có rồi trong firebase thì snap.exists() == false
        // => Cho phép user đó đc add vào trong firebase
        if (snapshot.exists() == false) {
          set(ref(database, "users/" + user_name_input.value), {
            username: user_name_input.value,
            userage: user_age_input.value,
            useravata: user_avata.value,
          });
    
          alert("Tạo tài khoản thành công");
        } else {
          alert("Tên này đã được sử dụng, vui lòng nhập tên khác");
          // alert(snapshot.val());
        }
      });
    });
    
    // Read
    read_data.addEventListener("click", function () {
      onValue(ref(database, "users"), (snap) => {
        let data = snap.val();
        console.log(data);
        
        if(data && data.user_avata){
          document.getElementById(
            "imageGallery"
            ).style.backgroundImage = `url("${data.user_avata}")`;
        }
      });
    });
    
    // Update
    update_btn.addEventListener("click", function () {

      update(ref(database, "users/" + user_name_input.value), {
        userfavor: user_favor_input.value,
      });
    });
    
    // Delete
    delete_btn.addEventListener("click", function () {remove(ref(database, "users/" + user_name_input.value));
    });