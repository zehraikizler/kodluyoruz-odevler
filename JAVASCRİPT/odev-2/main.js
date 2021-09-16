const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");
const todo_container = document.querySelector(".todo_container");
let deleteBtns; // yapamadım silme işini :( uğraştım olmadı sorabileceğim kimse yok.

const addHTML = (todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    const todoLeft = document.createElement("div");
    todoLeft.classList.add("todo_left");

    const todoCb = document.createElement("input");
    todoCb.type = "checkbox";
    todoCb.checked = todo.isCompleted;
    todoCb.classList.add("todo_cb");

    const todoText = document.createElement("span");
    todoText.classList.add("todo_text");
    todoText.textContent = todo.text;

    todoLeft.appendChild(todoCb);
    todoLeft.appendChild(todoText);

    const todoRight = document.createElement("div");
    todoRight.classList.add("todo_right");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo_delete");
    deleteBtn.textContent = "X";

    todoRight.appendChild(deleteBtn);

    todoDiv.appendChild(todoLeft);
    todoDiv.appendChild(todoRight);

    todo_container.appendChild(todoDiv);
}

const startConf = () => {
    //Başlangıç ayarları
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(!todos){
        localStorage.setItem("todos", JSON.stringify([]));
    } else{
        todos.forEach(todo=>{
            addHTML(todo);
        });
        deleteBtns = document.querySelector(".todo_delete");
        console.log(deleteBtns);
    }
}

startConf();


const addTodo = (e) =>  {
    
    e.preventDefault();

    const inputVal = input.value;

    const todo = {
        text : inputVal,
        isCompleted : false,
    };

    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    addHTML(todo);

    form.reset();
    
}

// const deleteTodo = (e) => {
//     console.log(e.target);
// }

form.addEventListener("submit", addTodo);
// deleteBtns.forEach(btn => btn.addEventListener('click', deleteTodo));


deleteBtns.addEventListener('click', function(e){
    const todo = e.target.parentElement.parentElement;
    todo.remove();
})