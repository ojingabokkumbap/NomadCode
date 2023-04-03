const weatherContainer = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
const API_KEY = "70ead2f97344f9d0c1029631a6eb0711";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("not found")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //user의 위치 줌