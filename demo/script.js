login_btn.addEventListener("click", function () {
    let username = username_login.value;
    let password = password_login.value;
  
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        let date = new Date();
        update(ref(database, "user/" + user.uid), {
          lastLogin: date,
        });
        localStorage.setItem("name", username);
        alert("Đăng nhập thành công");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMess = err.message;
  
        alert(errorMess);
      });
  });
   //   Đoạn này anh lưu 2 thông tin quan trong nhất của 1 user khi đăng nhập thành công đó là username và user uid
   localStorage.setItem("username_login", username);
   localStorage.setItem("userUID_login", user.uid);

   // Sau khi đăng nhập thành công xong có thể sử chuyển đối sang 1 trang khác
   alert("Đăng nhập thành công");

   setTimeout(() => {
     // ở đây a chuyển sang trang home để làm mẫu CRUD cho các em
     window.location.href = "./home.html";
   }, 2000);
