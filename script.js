let cart = [];

function addToCart(productName, price) {
    // Überprüfe, ob das Produkt bereits im Warenkorb ist
    let found = cart.find(item => item.name === productName);
    if (found) {
        found.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Update des Warenkorbs im Navigation
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartLink = document.querySelector('nav ul li a[href="#"]');
    cartLink.textContent = `Warenkorb (${cartCount})`;
}
