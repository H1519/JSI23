document.addEventListener("DOMContentLoaded", function() {
const compareBtn = document.getElementById("compareBtn");
    // Gọi hàm hoặc sự kiện từ firebase.js để kích hoạt sau khi Firebase đã tải xong
    compareBtn.addEventListener("click", compareCredentials);
    
    // Thêm các sự kiện hoặc hàm khác tại đây nếu cần
});
const auth = firebase.auth();
const database = firebase.database();
compareBtn.addEventListener("click", compareCredentials);
function compareCredentials() {
  const email1 = document.getElementById("email1").value;
  const password1 = document.getElementById("password1").value;
  const email2 = document.getElementById("email2").value;
  const password2 = document.getElementById("password2").value;
  const cont = document.getElementsByClassName("cont")
  cont.style.display="block";
  firebase
  .auth()
  .signInWithEmailAndPassword(email1, password1)
  .then((userCredential) => {
      console.log("User 1 authenticated");
      const dbRef = firebase.database().ref();
      dbRef
      .child("users")
      .once("value")
      .then((snapshot) => {
          const userData = snapshot.val();
          if (userData.email === email2 && userData.password === password2) {
           
            console.log("Đăng nhập thành công");
            document.getElementById("email1").style.display = "none";
            document.getElementById("email2").style.display = "none";
            document.getElementById("password1").style.display = "none";
            document.getElementById("password2").style.display = "none";
            const app = initializeApp(firebaseConfig);
            const database = getDatabase(app);
            const auth = getAuth();
            let tog = 1;
            document.getElementById("tog").style.display = "block";
            let n = 0;
            let nn = 0;
            let nnn = 0;
            let p1sum = 0;
            let p2sum = 0;
            let soccer =0;
            let reset = document.getElementById("reset");
            let username;
            let username1;
            let red = document.createElement("h7");
            let yellow = document.createElement("h7");
            let red1=document.getElementById("red");
            let yellow1=document.getElementById("yellow");
            red1.appendChild(red);
            yellow1.appendChild(yellow);
            
            function play(player, psum, correction) {
                let sum;
                let numarr;
                let n1,n2;
                if (psum === 'p1sum') {
                    p1sum = p1sum + num;
            
                    if (p1sum > 100) {
                        p1sum = p1sum - num;
                    }
            
                    if (p1sum == 1) {
                        p1sum = 38
                    }
                    if (p1sum == 4) {
                        p1sum = 14
                    }
                    if (p1sum == 8) {
                        p1sum = 30
                    }
                    if (p1sum == 21) {
                        p1sum = 42
                    }
                    if (p1sum == 28) {
                        p1sum = 76
                    }
                    if (p1sum == 32) {
                        p1sum = 10
                    }
                    if (p1sum == 36) {
                        p1sum = 6
                    }
                    if (p1sum == 48) {
                        p1sum = 26
                    }
                    if (p1sum == 50) {
                        p1sum = 67
                    }
                    if (p1sum == 62) {
                        p1sum = 18
                    }
                    if (p1sum == 71) {
                        p1sum = 92
                    }
                    if (p1sum == 80) {
                        p1sum = 99
                    }
                    if (p1sum == 88) {
                        p1sum = 24
                    }
                    if (p1sum == 95) {
                        p1sum = 56
                    }
                    if (p1sum == 97) {
                        p1sum = 78
                    }
            
                    sum = p1sum
                }
            
                if (psum === 'p2sum') {
                    p2sum = p2sum + num;
            
                    if (p2sum > 100) {
                        p2sum = p2sum - num;
                    }
                    
            
                    if (p2sum == 1) {
                        p2sum = 38
                    }
                    if (p2sum == 4) {
                        p2sum = 14
                    }
                    if (p2sum == 8) {
                        p2sum = 30
                    }
                    if (p2sum == 21) {
                        p2sum = 42
                    }
                    if (p2sum == 28) {
                        p2sum = 76
                    }
                    if (p2sum == 32) {
                        p2sum = 10
                    }
                    if (p2sum == 36) {
                        p2sum = 6
                    }
                    if (p2sum == 48) {
                        p2sum = 26
                    }
                    if (p2sum == 50) {
                        p2sum = 67
                    }
                    if (p2sum == 62) {
                        p2sum = 18
                    }
                    if (p2sum == 71) {
                        p2sum = 92
                    }
                    if (p2sum == 80) {
                        p2sum = 99
                    }
                    if (p2sum == 88) {
                        p2sum = 24
                    }
                    if (p2sum == 95) {
                        p2sum = 56
                    }
                    if (p2sum == 97) {
                        p2sum = 78
                    }
            
                    sum = p2sum
            
            
            
                }
            
            
                document.getElementById(`${player}`).style.transition = `linear all .5s`
            
            
            
            
            
                if (sum < 10) {
                    document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
                    document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`
                }
                else if (sum == 100) {
                    if (player == 'p1') {
                        if(nn=nnn){
                    alert("Player1 Win !!")
                    let P1= prompt("Nhập tên Player 1");
                    let P2= prompt("Nhập tên Player 2");
                    let username = P1;
                    let username1 = P2;
                    update(ref(database, "users/" + username), {
                      soccer: nnn.value,
                    });
                  alert(errorMess);
                };
                    }
                    else if (player == 'p2') {
                      alert("P2 Win !!")
                      let P1= prompt("Nhập tên Player 1");
                      let P2= prompt("Nhập tên Player 2");
                      let username = P1;
                      let username1 = P2;
                      update(ref(database, "users/" + username), {
                        soccer: nnn.value,
                      });
                    alert(errorMess);
                  };
                    reset.style.display = "block";
                    reset.addEventListener("click", function(){
                        location.reload();
                    });
                }
                else {
            
                    numarr = Array.from(String(sum))
                    n1 = eval(numarr.shift())
                    n2 = eval(numarr.pop())
                    // console.log(n1, n2)
                    if (n1 % 2 != 0) {
            
                        if (n2 == 0) {
                            document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                            document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
                        }
                        else {
                            document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                            document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            
                        }
            
                    }
                    else if (n1 % 2 == 0) {
                        if (n2 == 0) {
            
                            document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                            document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
                        }
                        else {
            
                            document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                            document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
                        }
            
                    }
            
            
            
                }
            }
            let num;
            let diceBtn =document.getElementById("diceBtn");
            diceBtn.style.display="block";
            diceBtn.addEventListener("click", function () {
                num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                document.getElementById("dice").innerText = num;
                n = n + 1;
                if (n === 1) {
                    nnn = nnn + 1;
                    red.innerText = nnn;
                }
                if (n === 2) {
                    nn = nn + 1;
                    n = 0;
                    yellow.innerText = nnn;
                }
            
                if (tog % 2 !== 0) {
                    document.getElementById('tog').innerText = "Yellow's Turn : ";
                    play('p1', 'p1sum', 0, num, nn);
                } else {
                    document.getElementById('tog').innerText = "Red's Turn : ";
                    play('p2', 'p2sum', 55, num, nn);
                }
            
                tog = tog + 1;
            });

            
          } else {
            console.log("sai password or email");
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
