let students = [];

function renderTable() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";
  students.forEach((student, index) => {
    tbody.innerHTML += `
      <tr>
        <td><input type="text" value="${student.name}" onchange="updateStudent(${index}, 'name', this.value)"></td>
        <td><input type="number" value="${student.age}" onchange="updateStudent(${index}, 'age', this.value)"></td>
        <td><input type="text" value="${student.class}" onchange="updateStudent(${index}, 'class', this.value)"></td>
        <td>
          <button class="action-btn" onclick="deleteStudent(${index})">Xoá</button>
        </td>
      </tr>
    `;
  });
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const className = document.getElementById("class").value.trim();
  if (name && age && className) {
    students.push({ name, age, class: className });
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("class").value = "";
    renderTable();
  } else {
    alert("Vui lòng nhập đầy đủ thông tin.");
  }
}

function updateStudent(index, key, value) {
  students[index][key] = value;
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}
