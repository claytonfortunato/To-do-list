const AddButton = document.querySelector(".task-item");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".new-task-container");

const saveTodo = (text) => {
  const todo = document.querySelector("div");
  todo.classList.add(".new-task-container");

  const todoTitle = document.querySelector("p");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const deleteBtn = document.querySelector("button");
  deleteBtn.classList.add("#deleteBtn");
  deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);
  console.log(todoList);

  todoInput.value = "";
};

AddButton.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});
