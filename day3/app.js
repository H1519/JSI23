
fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (response) {
    return response.json();
  })
     .then(function (data_vua_lay) {
          //cách 1
     // for(i=0;i<=4;i++){
     // let card = document.getElementById("card")
     // let div = document.createElement("div");
     // let h1 = document.createElement("h1");
     // let h12 =document.createElement("h1");
     // let img = document.createElement("img");
     // let span = document.createElement("span");
     // div.style.width = "300px"
     // div.style.height = "300px"
     // div.style.border = "2px solid red "
     // img.style.height = "130px"
     // h12.innerText= data_vua_lay[i].albumId
     // img.src = data_vua_lay[i].url
     // h1.innerText = data_vua_lay[i].title
     // span.innerText = "ID"+ data_vua_lay[i].id
     // div.appendChild(h12)
     // div.appendChild(h1)
     // div.appendChild(img)
     // div.appendChild(span)
     // card.appendChild(div)}    
     //cách 2
     let box = document.querySelector(".box");
     let empty_string =  "";
     for(i=0;i<=4;i++){
     empty_string = empty_string+`<div class="card">
          <img src="${data_vua_lay[i].url}" alt="" />
          <h1 class="heading">${data_vua_lay[i].albumId}</h1>
          <div id="container">
            <b> ID: </b>
            <span id="item_id">${data_vua_lay[i].id}</span>
          </div>
        </div>`;
        card.innerHTML = empty_string;
     }
  });
  
  