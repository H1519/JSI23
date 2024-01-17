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
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
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

    // Get the selected image file
    const avatarFile = avatar_input.files[0];

    if (!avatarFile) {
        alert("Vui lòng chọn một hình ảnh.");
        return;
    }

    try {
        // Upload the image file to Firebase Storage
        const storageRefPath = storageRef(storage, "avatars/" + user_name_input.value);
        await uploadBytes(storageRefPath, avatarFile);

        // Get the URL of the uploaded image
        const downloadURL = await getDownloadURL(storageRefPath);

        // Save user information to Firebase Realtime Database
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
