document.getElementById("compareBtn").addEventListener("click", compareCredentials);

function compareCredentials() {
  const email1 = document.getElementById("email1").value;
  const password1 = document.getElementById("password1").value;
  const email2 = document.getElementById("email2").value;
  const password2 = document.getElementById("password2").value;

  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then((userCredential) => {
      console.log("User 1 authenticated");
      // Now compare email2 and password2 with the values in real-time database
      const dbRef = firebase.database().ref();
      dbRef.child("users").once("value")
        .then((snapshot) => {
          const userData = snapshot.val();
          if (userData.email === email2 && userData.password === password2) {
            console.log("User 2 credentials match the database");
          } else {
            console.log("User 2 credentials do not match the database");
          }
        })
        .catch((error) => {
          console.error("Error reading data:", error);
        });
    })
    .catch((error) => {
      console.error("Error authenticating user 1:", error);
    });
}
