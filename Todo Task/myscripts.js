let arrayTodoSave = [];
let arrayDateSave = [];

window.addEventListener("load", function () {
  let savedTasks = localStorage.getItem("todoTasks");
  if (savedTasks) {
    var parsedTasks = JSON.parse(savedTasks);
    arrayTodoSave = parsedTasks.todos;
    arrayDateSave = parsedTasks.dates;
    DisplayToDoTask();
  }
  ChangeColors();
});

function DisplayToDoTask() {
  let toDoHTML = "";

  for (let index = 0; index < arrayTodoSave.length; index++) {
    const todoTask = arrayTodoSave[index];
    const todoDate = arrayDateSave[index];
    let html = `<p style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); column-gap: 5px; margin-right:auto; margin-top: 50px;">
        Task ${index + 1}:
        <span class="Todo-name">${todoTask}</span>
        <span class="Todo-date">${todoDate}</span>
        <select class="statusSelect">
          <option class="select" value="select">Select...</option>
          <option class="done" value="done">Done</option>
          <option class="inprogress" value="In Progress">In Progress</option>
          <option class="pending" value="Pending">Pending</option>
        </select>
        <button onclick="RemoveTask(${index})" class="delete-button">Delete</button>
    </p>`;
    toDoHTML += html;
  }

  let DisplayTask = (document.querySelector("#tasks").innerHTML = toDoHTML);
}

function ChangeColors() {
  let tasksContainer = document.querySelector("#tasks");

  tasksContainer.addEventListener("change", function (event) {
    let selectedValue = event.target.value;

    if (selectedValue === "In Progress") {
      event.target.style.backgroundColor = "#3498DB";
      event.target.style.color = "white";
      event.target.style.border = "none";
      event.target.style.fontWeight = "bold";
      event.target.style.textAlign = "center";
    }
    if (selectedValue === "Pending") {
      event.target.style.backgroundColor = "#FFA500";
      event.target.style.color = "white";
      event.target.style.border = "none";
      event.target.style.fontWeight = "bold";
      event.target.style.textAlign = "center";
    }
    if (selectedValue === "select") {
      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";
      event.target.style.border = "none";
      event.target.style.fontWeight = "bold";
      event.target.style.textAlign = "center";
    }
    if (selectedValue === "done") {
      event.target.style.backgroundColor = "#008000";
      event.target.style.color = "white";
      event.target.style.border = "none";
      event.target.style.fontWeight = "bold";
      event.target.style.textAlign = "center";
    }
  });
}

function RemoveTask(index) {
  arrayTodoSave.splice(index, 1);
  arrayDateSave.splice(index, 1);
  DisplayToDoTask();
  saveToLocalStorage();
}

function takeTodoTask() {
  const connectTodoTask = document.querySelector("#todo-list");
  let takeTodoTask = connectTodoTask.value;

  const connectTodoDate = document.querySelector("#take-date");
  let takeTodoDate = connectTodoDate.value;

  arrayTodoSave.push(takeTodoTask);
  arrayDateSave.push(takeTodoDate);

  connectTodoTask.value = "";
  connectTodoDate.value = "";

  DisplayToDoTask();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const tasksToSave = {
    todos: arrayTodoSave,
    dates: arrayDateSave,
  };

  localStorage.setItem("todoTasks", JSON.stringify(tasksToSave));
}

function OnKeyDown_takeTodoTask() {
  let taketask = event.key;
  if (taketask === "Enter") {
    takeTodoTask();
  }
}
