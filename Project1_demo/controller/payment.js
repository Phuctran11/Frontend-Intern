document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementById('checkout-btn');
  
  checkoutBtn.addEventListener('click', () => {
      if (CartManager.cart.length === 0) {
          alert('Giỏ hàng trống!');
          return;
      }

      const orderData = {
          items: CartManager.cart,
          total: CartManager.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
          date: new Date().toISOString(),
          status: 'Đang xử lý'
      };

      // Lưu đơn hàng vào json-server
      fetch('http://localhost:3000/orders', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData)
      })
      .then(response => response.json())
      .then(() => {
          // Xóa giỏ hàng
          CartManager.cart = [];
          CartManager.saveCart();
          CartManager.updateCartUI();
          
          alert('Đặt hàng thành công!');
          document.getElementById('cart-modal').classList.add('hidden');
      })
      .catch(error => {
          console.error('Lỗi thanh toán:', error);
          alert('Thanh toán thất bại');
      });
  });
});