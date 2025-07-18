class CartManager {
  static cart = [];

  static addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      
      if (existingProduct) {
          existingProduct.quantity += 1;
      } else {
          this.cart.push({...product, quantity: 1});
      }

      this.updateCartUI();
      this.saveCart();
  }

  static removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
      this.updateCartUI();
      this.saveCart();
  }

  static updateQuantity(productId, quantity) {
      const product = this.cart.find(item => item.id === productId);
      if (product) {
          product.quantity = quantity;
          this.updateCartUI();
          this.saveCart();
      }
  }

  static updateCartUI() {
      const cartCount = document.getElementById('cart-count');
      const cartItems = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');

      cartCount.textContent = this.cart.reduce((total, item) => total + item.quantity, 0);

      // Render chi tiết giỏ hàng
      cartItems.innerHTML = this.cart.map(item => `
          <div class="flex justify-between items-center mb-2">
              <span>${item.name}</span>
              <div>
                  <input type="number" 
                         min="1" 
                         value="${item.quantity}" 
                         class="w-16 border text-center"
                         onchange="CartManager.updateQuantity(${item.id}, this.value)">
                  <span>${(item.price * item.quantity).toLocaleString()}đ</span>
                  <button onclick="CartManager.removeFromCart(${item.id})">Xóa</button>
              </div>
          </div>
      `).join('');

      // Tổng tiền
      const total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      cartTotal.textContent = `Tổng: ${total.toLocaleString()}đ`;
  }

  static saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  static loadCart() {
      const savedCart = localStorage.getItem('cart');
      this.cart = savedCart ? JSON.parse(savedCart) : [];
      this.updateCartUI();
  }
}

// Khởi tạo giỏ hàng từ localStorage
document.addEventListener('DOMContentLoaded', () => {
  CartManager.loadCart();

  // Sự kiện hiển thị modal giỏ hàng
  document.getElementById('cart-btn').addEventListener('click', () => {
      document.getElementById('cart-modal').classList.remove('hidden');
  });

  // Đóng modal
  document.getElementById('cart-modal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
          e.currentTarget.classList.add('hidden');
      }
  });
});