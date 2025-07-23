
  const productForm = document.querySelector('form');
  const productTable = document.querySelector('table');
  let editIndex = -1;

  productForm.addEventListener('submit', function(e) {
    e.preventDefault();

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;

  if (name === '' || price === '') {
    alert("Vui lòng nhập đầy đủ tên và giá sản phẩm.");
  return;
    }

  const newRow = `
  <td>${name}</td>
  <td>${price}</td>
  <td>${category}</td>
  <td>${description}</td>
  <td>
    <button onclick="editProduct(this)">Sửa</button>
    <button onclick="deleteProduct(this)">Xoá</button>
  </td>
  `;

  if (editIndex === -1) {
      const row = productTable.insertRow(-1);
  row.innerHTML = newRow;
    } else {
      const row = productTable.rows[editIndex];
  row.innerHTML = newRow;
  editIndex = -1;
    }

  productForm.reset();
  });

  function deleteProduct(button) {
    if (confirm("Bạn có chắc muốn xoá sản phẩm này không?")) {
      const row = button.parentNode.parentNode;
  row.remove();
    }
  }

  function editProduct(button) {
    const row = button.parentNode.parentNode;
  editIndex = row.rowIndex;

  document.getElementById('name').value = row.cells[0].innerText;
  document.getElementById('price').value = row.cells[1].innerText;
  document.getElementById('category').value = row.cells[2].innerText;
  document.getElementById('description').value = row.cells[3].innerText;
  }

