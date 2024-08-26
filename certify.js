const catalog = document.getElementById('catalog');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const addToCartButton = document.getElementById('add-to-cart');

let certifications = [
    { name: 'Certificación 1', description: 'Descripción de la certificación 1', price: 100 },
    { name: 'Certificación 2', description: 'Descripción de la certificación 2', price: 200 },
    { name: 'Certificación 3', description: 'Descripción de la certificación 3', price: 300 },
];

catalog.innerHTML = '';
certifications.forEach((certification) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${certification.name} - ${certification.price}€`;
    catalog.appendChild(listItem);
});

addToCartButton.addEventListener('click', () => {
    const selectedCertification = catalog.querySelector('li:hover');
    if (selectedCertification) {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${selectedCertification.textContent} - ${selectedCertification.dataset.price}€`;
        cartItems.appendChild(cartItem);
    }
});