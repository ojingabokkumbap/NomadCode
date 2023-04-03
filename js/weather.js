function onGeoOk(){
  alert("find you"+position);
}

function onGeoError(){
  alert("not found")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //user의 위치 줌