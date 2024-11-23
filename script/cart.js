// Перевіряємо корзину та оновлюємо кількість товарів у верхній частині
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
  });
  
  // Додавання товару до корзини
  function addToCart(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} додано до корзини!`);
    updateCartCount();
  }
  
  // Оновлення кількості товарів в корзині
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('item-count').textContent = cart.length;
  }
  
  // Клік по корзині
  document.getElementById('cart-icon').addEventListener('click', () => {
    // Перевірка на порожній кошик
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
      // Якщо кошик порожній, вивести повідомлення
      alert('Корзина пуста');
    } else {
      // Якщо в кошику є товари, перейти на сторінку корзини
      window.location.href = 'cart.html';
    }
  });
  