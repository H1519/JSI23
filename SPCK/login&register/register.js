import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getStorage,
    uploadBytes,
    ref as storageRef,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import {
    get,
    getDatabase,
    set,
    ref as dbRef,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
    // YOUR FIREBASE CONFIG HERE
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

const user_name_input = document.getElementById("user_name");
const password_input = document.getElementById("password");
const avatar_input = document.getElementById("avatar_input");
const add_user_btn = document.getElementById("add_user_btn");

add_user_btn.addEventListener("click", async function () {
    const userRef = dbRef(database, "users/" + user_name_input.value);

    const avatarFile = avatar_input.files[0];

    if (!user_name_input.value || !password_input.value || !avatarFile) {
        alert("Vui lòng điền đầy đủ thông tin và chọn một hình ảnh.");
        return;
    }

    try {
        const storageRefPath = storageRef(storage, "avatars/" + user_name_input.value);
        await uploadBytes(storageRefPath, avatarFile);

        const downloadURL = await getDownloadURL(storageRefPath);

        await set(userRef, {
            username: user_name_input.value,
            password: password_input.value,
            useravata: downloadURL,
        });

        alert("Tạo tài khoản thành công");
    } catch (error) {
        console.error("Lỗi khi tải ảnh hoặc lưu thông tin người dùng:", error);
        alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
});
