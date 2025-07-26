
    let employees = [];
    let editIndex = null;

    const form = document.getElementById('employeeForm');
    const table = document.getElementById('employeeTable');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const age = parseInt(document.getElementById('age').value);
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const position = document.getElementById('position').value;
      const note = document.getElementById('note').value.trim();

      if (!name || age < 18 || age > 65 || !gender || !position) return;

      const employee = {
        id: Date.now(),
        name,
        age,
        gender,
        position,
        note
      };

      if (editIndex !== null) {
        employees[editIndex] = { ...employee, id: employees[editIndex].id };
        editIndex = null;
      } else {
        employees.push(employee);
      }

      form.reset();
      renderTable();
    });

    function renderTable() {
      table.innerHTML = '';
      employees.forEach((emp, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${emp.id}</td>
          <td>${emp.name}</td>
          <td>${emp.age}</td>
          <td>${emp.gender}</td>
          <td>${emp.position}</td>
          <td>${emp.note}</td>
          <td>
            <button onclick="editEmployee(${index})" class="edit">Sửa</button>
            <button onclick="deleteEmployee(${index})" class="delete">Xoá</button>
          </td>
        `;
        table.appendChild(row);
      });
    }

    window.editEmployee = function(index) {
      const emp = employees[index];
      document.getElementById('name').value = emp.name;
      document.getElementById('age').value = emp.age;
      document.querySelector(`input[name="gender"][value="${emp.gender}"]`).checked = true;
      document.getElementById('position').value = emp.position;
      document.getElementById('note').value = emp.note;
      editIndex = index;
    };

    window.deleteEmployee = function(index) {
      const confirmDelete = confirm("Bạn có chắc muốn xoá nhân viên này?");
      if (confirmDelete) {
        employees.splice(index, 1);
        renderTable();
      }
    };