let cartItems = [];
document.getElementById('cart-icon').addEventListener('click', function() {
    const cartCount = cartItems.length;

    if (cartCount === 0) {
        alert("Корзина пуста");
    } else {
        updateCartModal();
        document.getElementById('cart-modal').style.display = 'flex';
    }
});
function updateCartModal() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';  

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

document.getElementById('cart-modal-close').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});


function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity; 
    } else {
        cartItems.push({...product, quantity: quantity}); 
    }


    updateCartCount();
    alert("Товар додано в корзину");
}

function updateCartCount() {
    const cartCount = cartItems.length;
    document.getElementById('cart-count').textContent = cartCount;
}


document.getElementById('pay-button').addEventListener('click', function() {
    if (cartItems.length === 0) {
        alert("Корзина пуста! Не можна здійснити оплату.");
    } else {
        alert("Оплата успішна! Дякуємо за покупку.");
        cartItems = [];  
        updateCartCount();  
        updateCartModal();  
    }
});


const products = [
    {id: 1, name: "Шахмати", price: 100},
    {id: 2, name: "Монополія", price: 150}
];

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
