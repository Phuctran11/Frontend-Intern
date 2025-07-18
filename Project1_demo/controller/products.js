const API_URL = 'http://localhost:3000/products';

async function fetchProducts() {
  try {
      const response = await fetch(API_URL);
      return await response.json();
  } catch (error) {
      console.error('Lỗi tải sản phẩm:', error);
      return [];
  }
}

function renderProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card', 'border', 'p-4', 'text-center');
      productCard.dataset.category = product.category;
      
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="mx-auto mb-4 h-48 object-cover">
          <h3 class="font-bold">${product.name}</h3>
          <p class="text-gray-600">${product.price.toLocaleString()}đ</p>
          <button class="add-to-cart bg-blue-500 text-white px-4 py-2 rounded mt-2" 
                  data-id="${product.id}">
              Thêm Vào Giỏ
          </button>
      `;

      productList.appendChild(productCard);
  });

  // Gắn sự kiện thêm vào giỏ hàng
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (e) => {
          const productId = e.target.dataset.id;
          const product = products.find(p => p.id === parseInt(productId));
          CartManager.addToCart(product);
      });
  });
}

function filterProducts(category) {
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
      const productCategory = product.dataset.category;
      product.style.display = 
          category === 'all' || productCategory === category 
              ? 'block' 
              : 'none';
  });
}

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProducts();
  renderProducts(products);

  // Sự kiện filter danh mục
  document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
          const category = btn.dataset.category;
          filterProducts(category);
      });
  });
});