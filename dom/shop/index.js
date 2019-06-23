'use strict'

const allButtons = document.querySelectorAll('button.add');
let cartTotalPrice = document.querySelector('#cart-total-price');
let cartCount = document.querySelector('#cart-count');

function addToCart() {
    let price = this.getAttribute('data-price');
    let currentTotalPrice = cartTotalPrice.innerHTML;
    let newTotalPrice = (+currentTotalPrice) + (+price);
    cartTotalPrice.innerHTML = newTotalPrice;
    let currentCount = cartCount.innerHTML;
    cartCount.innerHTML = (+currentCount) + 1;
    console.log(price);
}
for(let button of allButtons) {
    button.addEventListener('click', addToCart)
}