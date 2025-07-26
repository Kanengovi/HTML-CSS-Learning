
  const categoryForm = document.getElementById('categoryForm');
  const categoryList = document.getElementById('categoryList');

  function loadCategories() {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    categoryList.innerHTML = '';
    categories.forEach((cat, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${cat.ten}</td>
        <td>${cat.soluong}</td>
        <td>
          <button onclick="editCategory(${index})" class="edit">Sửa</button>
          <button onclick="deleteCategory(${index})" class="delete">Xoá</button>
        </td>
      `;
      categoryList.appendChild(row);
    });
  }

  categoryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const ten = categoryForm.ten.value.trim();
    const soluong = parseInt(categoryForm.soluong.value);

    if (!ten || soluong < 0) return;

    const newCategory = { ten, soluong };
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.push(newCategory);
    localStorage.setItem('categories', JSON.stringify(categories));
    categoryForm.reset();
    loadCategories();
  });

  function deleteCategory(index) {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.splice(index, 1);
    localStorage.setItem('categories', JSON.stringify(categories));
    loadCategories();
  }

  function editCategory(index) {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const cat = categories[index];
    categoryForm.ten.value = cat.ten;
    categoryForm.soluong.value = cat.soluong;

    categories.splice(index, 1);
    localStorage.setItem('categories', JSON.stringify(categories));
    loadCategories();
  }

  loadCategories();

