const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  // Task list text

  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.classList.add("task-text");

  // Delete btn

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Edit btn

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task", li.firstChild.textContent);
    if (newTask !== null) {
      li.firstChild.textContent = newTask;
    }
  });

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  taskList.appendChild(li);

  input.value = "";
});
