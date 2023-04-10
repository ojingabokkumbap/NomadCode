const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input"); 위랑 같은 의미
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //todos를 여러번써서 변수로 담아줌

let toDos = []; //빈 array(배열)을 만들어줌

//todo list 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos배열을 String으로 바꿔주고 localStorage에 키:todos 와 값:toDos 배열내용으 로 저장함
}

//todo list 삭제하는 함수
function deleteToDo(event) {
  //click하는 event 정보를 가져옴
  const li = event.target.parentElement;
  //.target : 클릭된 HTML element, .parentElement : 클릭된 element의 부모
  //즉,클릭한 element의 부모를 li라는 변수에담고
  li.remove(); //그 li를 제거함
}

// todo list들을 보여주는 함수
function paintToDo(newTodo) {
  const li = document.createElement("li"); // li element만들기 , "li"는 해당 element를 정확히 입력해야하지만 변수 li는 마음대로 이름줘도됨
  li.id = newTodo.id; //li의 id를 newTodo의 id로 넣어줌,li에 id를 만들어줌
  const span = document.createElement("span"); //li에 바로만드는게 li 안에 span태그안에 만들거임(나중에 삭제도할거라)
  span.innerText = newTodo.text; //span에 입력한내용 넣어주기(newTodo중에 text만)
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // button에 click event를 추가하고 click시 deleteToDo함수를 호출
  li.appendChild(span); //li안에 span을 넣어줌(li는 span이라는 자식을 갖게됨)
  li.appendChild(button);
  toDoList.appendChild(li); //ul태그안에 li태그 자식으로 넣기
}

//todo list 입력내용을 전송하는 함수
function handleToDoSubmit(event) {
  event.preventDefault(); //기본동작 실행 x
  const newTodo = toDoInput.value; //변수에 입력한 값을 저장해줌
  toDoInput.value = ""; //입력칸에서 작성한걸 지워줌, 이렇게한다고 newTodo 변수가 비워지는게아님
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; //랜덤한 id를 주기위해 Date.now()함수 사용
  toDos.push(newTodoObj); //빈 배열에 작성한걸 넣어줌
  paintToDo(newTodoObj); //paintToDo함수 호출
  saveToDos(); //저장하는 함수호출(이 함수는 저장만함)
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//위에가 다끝나고 진행
const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에 저장되어있는 키가 todos인 아이템(ex.a,b,..)을 가져옴

/*forEach 사용법 1-1)
//직접 함수를 만들어 parsedToDos 배열의 아이템 갯수별 이 함수를 실행하게해주는데 단, 한개의 함수만 실행하게해줌
function sayHello() {
  console.log("hello");
  //localStorage에 ["a","b","c"] 배열 아이템 3개가 저장되어있다면 hello가 3번실행됨
  //단점. 처리되고있는건 item이 어떤건지알수없음.그냥 hello가 6번실행되는것만알수있음
}

//forEach 사용법 1-2)
function sayHello(item) {
  //js에서 event와 같이 제공해주는 item
  console.log("hello", item);
  //localStorage에 ["a","b","c"] 배열이 저장되어있다면 hello a, hello b, hello c 이렇게 실행됨
}

forEach 사용법 1)
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //localStorage에 그냥 string으로 저장되어있는걸 자바스크립트가 이해하는 object(여기선 배열)로 바꿔줌
  parsedToDos.forEach(sayHello); //forEach : array의 각 item에 대해 함수(function)를 실행하게해줌
}

//forEach 사용법 2)
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("hello", item));
}
*/

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //저장되어있는 todo가 있으면 그걸 위에 선언해놓은 빈 배열이었던 todos에 저장해줌
  parsedToDos.forEach(paintToDo); //그냥 paintToDo함수를 호출해주면 paintToDo함수는 text타입을 받고있고 알아서 item들 마다 paintToDo함수를 실행시켜줌
}
