function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Vui lòng nhập tên công việc!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
  ${taskText}<button class="delete-btn" onclick="this.parentElement.remove()">Xoá</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}

document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});