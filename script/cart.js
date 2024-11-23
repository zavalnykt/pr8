document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
  });
  function addToCart(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} додано до корзини!`);
    updateCartCount();
  }
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('item-count').textContent = cart.length;
  }
  document.getElementById('cart-icon').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
   
      alert('Корзина пуста');
    } else {
     
      window.location.href = 'cart.html';
    }
  });
  
