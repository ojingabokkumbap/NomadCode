// loginForm = document.getElementById("login-form");
// loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); //h1의 아이디를 읽어옴

//변수가 반복되는경우 전역변수로 빼주기
const HIDDEN_CLASSNAME = "hidden"; //중요한 정보를 담은게 아니라 대문자로 작성
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //1. 기본동작이 실행 되지않도록 막아주기
  loginForm.classList.add(HIDDEN_CLASSNAME); //2. hidden이라는 class name을 더해줘서 form을 숨김,css에 hidden만들어놓음
  const username = loginInput.value; //입력한 user 이름 변수로 저장 후
  localStorage.setItem(USERNAME_KEY, username); //이름 localStorage api에 저장.key는 "username" 값은 변수 username
  paintGreetings(username); //함수 호출

  //greeting.innerText = "Hello" + username; //그이름은 h1에 넣어 글자를 추가할거임
  //greeting.innerText = `Hello ${username}`; //string이랑 변수를 하나로 합쳐줄때 위에랑 똑같은 내용인데 백틱과(``)+ ${변수명} 을 사용해야함
  //greeting.classList.remove(HIDDEN_CLASSNAME); //hidden을 지워서 화면에 작성한걸 보여준다.
}

//h1에 hello 유저이름 띄우고 hidden제거하는 함수
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //저장되어있는 유저정보를 h1에 띄우고
  greeting.classList.remove(HIDDEN_CLASSNAME); //hidden 제거하기
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //유저정보 유무확인하기위해 읽어오기

if (savedUsername === null) {
  //유저정보가 있으면
  loginForm.classList.remove(HIDDEN_CLASSNAME); // hidden을 제거하기
  loginForm.addEventListener("submit", onLoginSubmit); //함수 실행
} else {
  paintGreetings(savedUsername);
}
