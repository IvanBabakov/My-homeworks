'use strict';

const addToCartButtons = document.getElementsByClassName('add-to-cart');

function addButtonTurnOn() {
    for (let button of addToCartButtons) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let currentItem = {'title': e.target.getAttribute('data-title'), 'price': e.target.getAttribute('data-price')};
            addToCart(currentItem);
        })
    }
}

showMore.addEventListener('click', addButtonTurnOn)

addButtonTurnOn();
