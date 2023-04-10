const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); //현재시간을 가져옴
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //브라우저 시작하자마자 함수실행
setInterval(getClock, 1000); //1초에 한번씩 getClock함수실행, 이게없으면 한번만 실행하고 끝남
