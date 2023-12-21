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
    let longitude=data.results[0].longitude;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
      .then(function (res) {
        return res.json();
      })
      .then(function (weather_data) {
        console.log(weather_data);
      // truy vấn để lấy latitude và longitude
     
    
    console.log(weather_data.current_weather.weathercode);
    let weathercode = weather_data.current_weather.weathercode
    let myname = weather_data.current_weather.time;
    let t = myname.substring(myname.length-5, myname.length);
    if(weathercode <=3){
      asd = `<h5>Tọa độ:
     ${data.results[0].latitude} ;
     ${data.results[0].longitude}</h5>
     <h5>Nhiệt độ:
     ${weather_data.current_weather.temperature}
     Thời Gian:${t}</h5>
     <img src="https://i.pinimg.com/originals/90/85/bb/9085bb2580eee46db433164fdcca9500.gif" alt="" style="width:200px;height: 200px;">`
    }
    if(weathercode >= 48 && weathercode<=67){
      asd = `<h5>Tọa độ:
     ${data.results[0].latitude} ;
     ${data.results[0].longitude}</h5>
     <h5>Nhiệt độ:
     ${weather_data.current_weather.temperature}
     Thời Gian:${t}</h5>
     <img src="https://i.pinimg.com/originals/89/27/01/892701252dab9ead045f745d999cf9fc.gif" alt="" style="width:200px;height: 200px;">`
    }
    if(weathercode >= 71 && weathercode<=86){
      asd = `<h5>Tọa độ:
     ${data.results[0].latitude} ;
     ${data.results[0].longitude}</h5>
     <h5>Nhiệt độ:
     ${weather_data.current_weather.temperature}
     Thời Gian:${t}</h5>
     <img src="https://i.pinimg.com/originals/94/0f/42/940f42ee6c416688121156ced1fadb66.gif" alt="" style="width:200px;height: 200px;">`
    }
    if(weathercode >= 95 && weathercode<=99){
      asd = `<h5>Tọa độ:
     ${data.results[0].latitude} ;
     ${data.results[0].longitude}</h5>
     <h5>Nhiệt độ:
     ${weather_data.current_weather.temperature}
     Thời Gian:${t}</h5>
     <img src="https://i.pinimg.com/originals/76/e3/f8/76e3f8a2710800715368f40bcded954f.gif" alt="" style="width:200px;height: 200px;">`
    }
div.innerHTML = asd;
});
});
})