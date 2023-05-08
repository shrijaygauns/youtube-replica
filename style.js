// Cart functionality
const cartItems = document.querySelectorAll('.products button');
const cartList = document.querySelector('.cart ul');
const cartTotal = document.querySelector('.cart p');

let total = 0;

cartItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    const product = event.target.parentNode;
    const productTitle = product.querySelector('h3').innerText;
    const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));
    const cartItem = document.createElement('li');
    const cartItemContent = document.createTextNode(`${productTitle} - $${productPrice}`);
    total += productPrice;
    cartTotal.innerText = `Total: $${total}`;
    cartItem.appendChild(cartItemContent);
    cartList.appendChild(cartItem);
  });
});
