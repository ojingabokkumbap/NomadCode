const clock = document.querySelector("h2#clock");
// const clock = document.querySelector("#clock"); 둘다 작성 가능

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock();
setInterval(getClock, 1000);
// setInterval(기능, 초(1/5000)): 특정 시간마다 매번 수행해야 할 경우 사용

/*
  padStart(), padEnd() : string 타입의 문자열의 포맷팅
  "1".padStart(2, "0");
  -> 1자리 길이인 문자열을 앞자리(padStart)에 "0"을 추가해서 2자리로 만들어 주세요.
*/