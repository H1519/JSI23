import { get, getDatabase, ref as dbRef } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    // YOUR FIREBASE CONFIG HERE
};

const database = getDatabase(firebaseConfig);

const login_user_name_input = document.getElementById("login_user_name");
const login_password_input = document.getElementById("login_password");
const login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", async function () {
    const userRef = dbRef(database, "users/" + login_user_name_input.value);

    try {
        const userSnapshot = await get(userRef);

        if (userSnapshot.exists()) {
            const userData = userSnapshot.val();

            if (userData.password === login_password_input.value) {
                alert("Đăng nhập thành công");
                // Redirect or perform other actions after successful login
            } else {
                alert("Mật khẩu không đúng");
            }
        } else {
            alert("Người dùng không tồn tại");
        }
    } catch (error) {
        console.error("Lỗi khi đăng nhập:", error);
        alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
});
