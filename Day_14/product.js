
  const productForm = document.getElementById('productForm');
  const productList = document.getElementById('productList');

  // Load sản phẩm từ localStorage
  function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    productList.innerHTML = '';
    products.forEach((product, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.ten}</td>
        <td>${product.price}</td>
        <td>${product.danhmuc}</td>
        <td>${product.mota}</td>
        <td>
          <button onclick="editProduct(${index})" class="edit">Sửa</button>
          <button onclick="deleteProduct(${index})" class="delete">Xoá</button>
        </td>
      `;
      productList.appendChild(row);
    });
  }

  // Thêm sản phẩm
  productForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const ten = productForm.ten.value.trim();
    const price = parseFloat(productForm.price.value);
    const danhmuc = productForm.danhmuc.value;
    const mota = productForm.mota.value.trim();

    if (!ten || price < 0 || !danhmuc) return;

    const newProduct = { ten, price, danhmuc, mota };
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    productForm.reset();
    loadProducts();
  });

  // Xoá sản phẩm
  function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
  }

  // Sửa sản phẩm (đơn giản: load lại vào form)
  function editProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products[index];
    productForm.ten.value = product.ten;
    productForm.price.value = product.price;
    productForm.danhmuc.value = product.danhmuc;
    productForm.mota.value = product.mota;

    // Xoá sản phẩm cũ để thêm lại sau khi sửa
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
  }

  // Khởi động
  loadProducts();
