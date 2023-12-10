let inputt = document.getElementById("a")
let button = document.getElementById("b")
let div =document.getElementById("c")
let asd = {}
button.addEventListener("click",function(){
let input_place = inputt.value;
fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input_place}`)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let latitude = data.results[0].latitude;
    let longitude=data.results[0].longtitude;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
      .then(function (res) {
        return res.json();
      })
      .then(function (weather_data) {
        console.log(weather_data);
      });
    // truy vấn để lấy latitude và longitude
     asd = `<h5>Tọa độ:
     ${data.results[0].latitude}
     ${data.results[0].longitude}</h5>
     <h5>Nhiệt độ:
     ${data.current_weather.temperature}</h5>`
    div.innerHTML = asd;
})
})