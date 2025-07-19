let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        <span contenteditable="true"
              onblur="editTask(${index}, this.innerText)"
              class="${task.done ? 'completed' : ''}">
          ${task.name}
        </span>
        <button onclick="toggleTask(${index})">${task.done ? 'Hoàn tác' : '✅'}</button>
        <button onclick="deleteTask(${index})">❌</button>
      </li>
    `;
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const name = input.value.trim();
  if (name) {
    tasks.push({ name, done: false });
    input.value = "";
    renderTasks();
  } else {
    alert("Vui lòng nhập tên công việc.");
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function editTask(index, newName) {
  tasks[index].name = newName.trim();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
