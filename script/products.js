// products.js

// Масив для збереження товарів у корзині
let cartItems = [];

// Функція для відкриття модального вікна корзини
document.getElementById('cart-icon').addEventListener('click', function() {
    const cartCount = cartItems.length;

    if (cartCount === 0) {
        alert("Корзина пуста");
    } else {
        // Відкриваємо модальне вікно і відображаємо товар у корзині
        updateCartModal();
        document.getElementById('cart-modal').style.display = 'flex';
    }
});

// Функція для оновлення вмісту корзини в модальному вікні
function updateCartModal() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';  // Очищаємо корзину перед оновленням

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price} грн</p>
            <p>Кількість: ${item.quantity}</p>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

// Закриття модального вікна корзини
document.getElementById('cart-modal-close').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});

// Додавання товару до корзини
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    
    // Перевірка, чи товар вже є в корзині
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity; // Збільшуємо кількість товару
    } else {
        cartItems.push({...product, quantity: quantity}); // Додаємо новий товар
    }

    // Оновлення кількості товарів у корзині
    updateCartCount();
    alert("Товар додано в корзину");
}

// Оновлення кількості товарів у корзині
function updateCartCount() {
    const cartCount = cartItems.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Обробник кнопки "Оплатити"
document.getElementById('pay-button').addEventListener('click', function() {
    if (cartItems.length === 0) {
        alert("Корзина пуста! Не можна здійснити оплату.");
    } else {
        alert("Оплата успішна! Дякуємо за покупку.");
        cartItems = [];  // Очищаємо корзину після оплати
        updateCartCount();  // Оновлюємо кількість товарів у корзині
        updateCartModal();  // Оновлюємо вміст корзини
    }
});

// Пример додавання продуктів
const products = [
    {id: 1, name: "Шахмати", price: 100},
    {id: 2, name: "Монополія", price: 150}
];

// Виведення списку продуктів
const productsContainer = document.getElementById('products');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price} грн</p>
        <button onclick="addToCart(${product.id}, 1)">Додати в корзину</button>
    `;
    productsContainer.appendChild(productDiv);
});
