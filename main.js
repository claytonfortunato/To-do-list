const AddButton = document.querySelector(".new-task-button");
const todoInput = document.querySelector(".new-task-input");

const tasksContainer = document.querySelector(".new-task-container");

const validateInput = () => todoInput.value.trim().length > 0;

const handleAddTask = () => {
  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("tasks-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = todoInput.value;

  const doneItem = document.createElement("i");
  doneItem.classList.add("fa-solid");
  doneItem.classList.add("fa-check");

  doneItem.addEventListener("click", () => handleDoneClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer, taskContent)
  );

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(doneItem);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  todoInput.value = "";
  todoInput.focus();
};

const handleDoneClick = (doneItem) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(doneItem)) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    if (task.firstChild.isSameNode(taskContent)) {
      taskItemContainer.remove();
    }
  }
};

AddButton.addEventListener("click", () => {
  handleAddTask();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const keyEnter = document.querySelector("#submit");

    keyEnter.click();
  }
});
