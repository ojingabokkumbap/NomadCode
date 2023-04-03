const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY  ="todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY ,JSON.stringify(toDos)); //stringify : 저장된 값을 string으로 반환
}

function deleteToDo(event){
  const li = event.target.parentElement; //해당 li값 가져오기
  li.remove();
  // filter 반드시 true를 리턴
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter안의 todo값은 임의로 설정 가능
  saveToDos(); //마지막에 변한 값 저장하는 거 잊지 않기
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event){ 
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 value를 비우기 전의 값을 나타내는 string
  toDoInput.value = "";
  const newTodoObj = { //value에 고유번호주기
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newTodoObj); //localStorage에 todo저장
  paintToDo(newTodoObj); //입력값 paintToDo에 저장
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); //parse : 배열값 분해
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); 
}
