/* let value_from_input = prompt("hi ");

if(value_from_input == 10){
     let h2 = document.createElement("h2");
     h2.innerText = "điểm tuyệt đối";
     h2.style.color ="green";
     document.body.appendChild("h2");
}
if(value_from_input <=9&&value_from_input>=0){
     let h2 = document.createElement("h2");
     h2.innerText = "điểm chx tuyệt đối";
     h2.style.color =""
     document.body.appendChild("h2");
     console.log(h2.innerText);
}
if(value_from_input >= 11||value_from_input<=0){
     let h2 = document.createElement("h2");
     h2.innerText = "bốc phét";
     h2.style.color ="red";
     document.body.appendChild("h2");
}
if(isNaN(value_from_input) == true ){
     let h2 = document.createElement("h2");
     h2.innerText = "bug";
     document.body.appendChild("h2");
     console.log(h2.innerText);
} */
// let human= {
//      name : "An",
//      age : 15 ,
//      hobby:["play game","nothing","haha"],
// }
// for(i=0;i<human.hobby.length;i++){
//      let li = document.createElement("li");
//      document.body.appendChild(li);
//      li.innerText = human.hobby[i];
//      }
//  function doing_some_thing(){
//      console.log("hi~.~");
//  }
//  doing_some_thing();
// function doing_some_thing(){
//      return("~.~");
// }
// console.log(doing_some_thing("~.~"));
let button1= document.getElementById("b1");
let button2= document.getElementById("b2");
let button3= document.getElementById("b3");
let button4= document.getElementById("b4");

button1.addEventListener("click",function(){
     let a = prompt("a=");
     let b = prompt("b=");
     if(isNaN(a)==false && isNaN(b)==false){
     c = Number(a) + Number(b);
     }else{
          alert("error 404")
     }
     let cong = document.createElement("h2");
     cong.innerText= "Phép cộng của 2 số " + a + " và " + b +" = "+ c;
     document.body.appendChild(cong);
})
button2.addEventListener("click",function(){
     let a = prompt("a=");
     let b = prompt("b=");
     if(isNaN(a)==false && isNaN(b)==false){
     c = a - b;
     }else{
          alert("error 404")
     }
     let tru = document.createElement("h2");
     tru.innerText= "Phép trừ của 2 số " + a + " và " + b +" = "+ c;
     document.body.appendChild(tru);
})
button3.addEventListener("click",function(){
     let a = prompt("a=");
     let b = prompt("b=");
     if(isNaN(a)==false && isNaN(b)==false){
     c = Number(a) * Number(b);
     }else{
          alert("error 404")
     }
     let nhan = document.createElement("h2");
     nhan.innerText= "Phép nhân của 2 số " + a + " và " + b +" = "+ c;
     document.body.appendChild(nhan);
})
button3.addEventListener("click",function(){
     let a = prompt("a=");
     let b = prompt("b=");
     if(isNaN(a)==false && isNaN(b)==false){
     c = Number(a) * Number(b);
     }else{
          alert("error 404")
     }
     let nhan = document.createElement("h2");
     nhan.innerText= "Phép nhân của 2 số " + a + " và " + b +" = "+ c;
     document.body.appendChild(nhan);
})
button4.addEventListener("click",function(){
     let a = prompt("a=");
     let b = prompt("b=");
     if(isNaN(a)==false && isNaN(b)==false){
     c = Number(a) / Number(b);
     }else{
          alert("error 404")
     }
     let chia = document.createElement("h2");
     chia.innerText= "Phép chia của 2 số " + a + " và " + b +" = "+ c;
     document.body.appendChild(chia);
})