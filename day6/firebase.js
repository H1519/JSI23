// Cập nhật phiên bản Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
      getDatabase,
      set, 
      ref, 
      onValue,
      update,
      remove,
      get,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeDqu_I1NKuYxCM-JDEg3F_nrXCiOgRzw",
  authDomain: "jsb23-ab6d5.firebaseapp.com",
  projectId: "jsb23-ab6d5",
  storageBucket: "jsb23-ab6d5.appspot.com",
  messagingSenderId: "733919925100",
  appId: "1:733919925100:web:35a9015d784141c7da9949",
  measurementId: "G-DVH9M55C58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let username_input = document.getElementById("user_name");
let userage_input = document.getElementById("user_age");
let add_user_btn = document.getElementById("add_user");
let read_data = document.getElementById("read_data");
let user_favor_input = document.getElementById("user_favor");
let update_btn = document.getElementById("up_date");
let delete_btn =document.getElementById("delete");
add_user_btn.addEventListener("click", function () {
     const newUsername = username_input.value;
     const userRef = ref(database, 'users/' + newUsername);
   
     // Kiểm tra xem tên người dùng đã tồn tại hay chưa
     get(userRef).then((snapshot) => {
       if (!snapshot.exists()) {
         // Tên người dùng chưa tồn tại, thêm vào cơ sở dữ liệu
         set(userRef, {
           username: newUsername,
           userage: userage_input.value,
         });
         console.log(`User '${newUsername}' đã được tạo mới thành công.`);
       } else {
         // Tên người dùng đã tồn tại
         console.log(`Tên người dùng '${newUsername}' đã tồn tại. Không thể tạo mới.`);
       }
     });
   
     // Reset giá trị nhập liệu
     username_input.value = "";
     userage_input.value = "";
     user_favor_input.value = "";
   });
   

//read
read_data.addEventListener("click",function(){
     onValue(ref(database, "users"), (snap) =>{
          let data = snap.val();
          console.log(data);
          });
          username_input.value="";
          userage_input.value="";
          user_favor_input.value="";
});

// Update
update_btn.addEventListener("click",function(){
     const newUsername = username_input.value;
     const userRef = ref(database, 'users/' + newUsername);
   
     // Kiểm tra xem tên người dùng đã tồn tại hay chưa
     get(userRef).then((snapshot) => {
       if (!snapshot.exists()) {
         // Tên người dùng chưa tồn tại, thêm vào cơ sở dữ liệu
         set(userRef, {
           username: newUsername,
           userage: userage_input.value,
         });
         console.log(`User '${newUsername}' đã được tạo mới thành công.`);
       } else {
         // Tên người dùng đã tồn tại
         console.log(`Tên người dùng '${newUsername}' đã tồn tại. Không thể tạo mới.`);
       }
     });
     update(ref(database, "users/"+ username_input.value),{
          user_favor: user_favor_input.value
     })
     username_input.value="";
     userage_input.value="";
     user_favor_input.value="";
});
//delete
delete_btn.addEventListener("click",function(){
     const newUsername = username_input.value;
     const userRef = ref(database, 'users/' + newUsername);
   
     // Kiểm tra xem tên người dùng đã tồn tại hay chưa
     get(userRef).then((snapshot) => {
       if (!snapshot.exists()) {
         // Tên người dùng chưa tồn tại, thêm vào cơ sở dữ liệu
         set(userRef, {

         });
         console.log(`User '${newUsername}' không tồn tại.`);
       } else {
         // Tên người dùng đã tồn tại
         console.log(`Tên người dùng '${newUsername}' xóa thành công.`);
       }
     });
     remove(ref(database, "users/"+username_input.value));
     username_input.value="";
     userage_input.value="";
     user_favor_input.value="";
})