const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = document.querySelector("input"); // 위와 동일한 의미
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// const toDos = [];
let toDos = [];

function saveToDos() {
  //localStorage.setItem("todos", toDos);
  /*
  localStorage에 array 타입 저장X -> 문자열을 array로 보이게끔해서 저장하는 작업 필요
  => JSON 의 stringify (객체 등 모두 string 타입으로 변환 가능)
  -> 중복 저장도 가능해짐
  */
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.log(event.target.parentElement.innerText);
  // target: event(클릭)된 target 추적해주는 HTML Element
  // parentElement: element의 부모 => li (삭제해주기 위해 찾아가는 중)
  const li = event.target.parentElement;
  li.remove();
  // filter 사용하여 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // (toDo)는 변수명
  saveToDos();
}

/*
// .filter : true만 return!!!
function sexyFilter(potato) {
  return potato < 3;
}
const a = [1,2,3,4].filter(sexyFilter);
console.log(a);
*/

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span =document.createElement("span");
  span.innerText = newTodo.text;
  const button =document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) {
  console.log("this it turn of " + item);
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!= null) {
  const parsedToDos = JSON.parse(savedToDos);
    // JSON.parse() : 단순 string 타입을 사용가능한 배열로 만들어 줌 = JS의 객체로 만들어 줌 (ex: string -> array)
    // 배열로 보이게끔 만든 string을 진짜 배열로 만들어 준다고 생각!
  
  toDos = parsedToDos;

  // parsedToDos.forEach(sayHello);
  parsedToDos.forEach(paintToDo);
  // 배열.forEach(): 개별 item에 function을 실행하게 해줌 (array에서 item들을 개별로 사용 가능)
  // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
  // 따로 function 메소드를 만들지 않고 위와 같이(arrow function으로) 작성 가능!
}


