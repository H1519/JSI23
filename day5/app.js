let div = document.getElementById("a")

setInterval(function () {
     let date = new Date();
     let hour = date.getHours();
     let minute = date.getMinutes();
     let second = date.getSeconds();
     if(second<10){
          div.innerHTML =`<div style="width:130px;height: 50px;box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;margin-left: 10%;margin-top: 5%;color:black"> <h1>${hour}:${minute}:0${second}</h1></div>`
     }else{
          div.innerHTML =`<div style="width:130px;height: 50px;box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;margin-left: 10%;margin-top: 5%;color:black"> <h1>${hour}:${minute}:${second}</h1></div>`
     }
     
   }, 1000);
