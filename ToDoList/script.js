const todolist=[];
let TodoListHtml='';
const output= document.querySelector('.js-output');
function addTodo() {
    const todoInput= document.querySelector('.todo-input');
    const todoInputDate=document.querySelector('.todo-input-date');
    if(todoInput.value !==''){
        todolist.push({name:todoInput.value, date: todoInputDate.value});
    }
    todoInput.value = '';
    // todoInputDate.value='';
    console.log(todolist);
    renderTodos();
}

function renderTodos(){
    TodoListHtml = '';
    for(let i=0;i<todolist.length;i++){
        TodoListHtml += `
        <div>
        ${todolist[i].name}
        </div>
        <div class="todo-date">${todolist[i].date}</div>
        <button class="DeleteButton" onclick = "deleteTodo(${i})">Delete</button>
        
        `
    }
    console.log(TodoListHtml);
    document.querySelector('.output').innerHTML='';
    document.querySelector('.output').innerHTML=TodoListHtml;
}

function deleteTodo(index){
    todolist.splice(index, 1);
    renderTodos();
}