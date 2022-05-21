const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

/*
나열된 string을 array style string으로 변환
JSON.stringify()

stringify로 변환된 string을 array로 변환
JSON.parse()
*/

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // console.log(li.id);
    
    li.remove();
    // filter: 조건에 부합하는 요소만 array로 만들어서 return
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    saveToDos();
    paintToDo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function loadList(item) {
//     console.log("This is the turn of "+item);
//     paintToDo(item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach(loadList);
    // parsedToDos.forEach((item => paintToDo(item)));
}