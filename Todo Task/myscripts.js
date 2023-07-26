let arrayTodoSave = [];
let arrayDateSave = [];

window.addEventListener('load', function() {
    let savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      var parsedTasks = JSON.parse(savedTasks);
      arrayTodoSave = parsedTasks.todos;
      arrayDateSave = parsedTasks.dates;
      DisplayToDoTask();
    }
  });

function DisplayToDoTask() {
  let toDoHTML = '';

  for (let index = 0; index < arrayTodoSave.length; index++) {
    const todoTask = arrayTodoSave[index];
    const todoDate = arrayDateSave[index];
    let html = 
    `<p>
        Task ${index + 1}:
        <span class="Todo-name">${todoTask}</span>
        <span class="Todo-date">${todoDate}</span>
        <button onclick="RemoveTask(${index})" class="delete-button">Delete</button>
    </p>`;
    toDoHTML += html;
  }

  let DisplayTask = document.querySelector('#tasks').innerHTML = toDoHTML;
}

function RemoveTask(index) {
  arrayTodoSave.splice(index, 1);
  arrayDateSave.splice(index, 1);
  DisplayToDoTask();
  saveToLocalStorage();
}

function takeTodoTask() {
  const connectTodoTask = document.querySelector('#todo-list');
  let takeTodoTask = connectTodoTask.value;

  const connectTodoDate = document.querySelector('#take-date');
  let takeTodoDate = connectTodoDate.value;

  arrayTodoSave.push(takeTodoTask);
  arrayDateSave.push(takeTodoDate);
  
  connectTodoTask.value = '';
  connectTodoDate.value = '';

  DisplayToDoTask();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const tasksToSave = {
    todos: arrayTodoSave,
    dates: arrayDateSave,
  };

  localStorage.setItem('todoTasks', JSON.stringify(tasksToSave));
}

function OnKeyDown_takeTodoTask() {
  let taketask = event.key;
  if (taketask === 'Enter') {
    takeTodoTask();
  }
}
