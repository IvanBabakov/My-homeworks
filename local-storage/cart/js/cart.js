'use strict';

function setColorOptions(option) {
    const perent = document.getElementById('colorSwatch');
    const divMain = document.createElement('div');
    divMain.setAttribute('data-value', `${option.code}`);
    divMain.classList.add('swatch-element', 'color', `${option.code}`);
    if(option.isAvailable) {
        divMain.classList.add('available');
    } else {
        divMain.classList.add('soldout');
    }
    const divTooltip = document.createElement('div');      
    divTooltip.classList.add('tooltip');
    divTooltip.textContent = `${option.title}`;
    divMain.appendChild(divTooltip);
    const input = document.createElement('input');
    input.setAttribute('quickbeam', 'color');
    input.setAttribute('id', `swatch-1-${option.code}`);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'color');
    input.setAttribute('value', `${option.code}`);
    if(!option.isAvailable) {
        input.setAttribute('disabled', '')
    };
    if(localStorage.getItem('color') == option.code) {
    input.setAttribute('checked', '');
    }
    divMain.appendChild(input);
    const label = document.createElement('label');
    label.setAttribute('for', `swatch-1-${option.code}`);
    label.setAttribute('style', 'border-color: red;');
    const span = document.createElement('span');
    span.setAttribute('style', `background-color: ${option.code};`);
    label.appendChild(span);
    const image = document.createElement('img');
    image.classList.add('crossed-out');
    image.setAttribute('src', 'https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886')
    label.appendChild(image);
    divMain.appendChild(label);
    perent.appendChild(divMain);
}

function setSizeOptions(option) {
    const perent = document.getElementById('sizeSwatch');
    const divMain = document.createElement('div');
    divMain.setAttribute('data-value', `${option.type}`);
    divMain.classList.add('swatch-element', 'plain', `${option.type}`);
    if(option.isAvailable) {
        divMain.classList.add('available');
    } else {
        divMain.classList.add('soldout');
    }
    const input = document.createElement('input');
    input.setAttribute('id', `swatch-0-${option.type}`);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'size');
    input.setAttribute('value', `${option.type}`);
    if(!option.isAvailable) {
        input.setAttribute('disabled', '');
    }
    if(localStorage.getItem('size') == option.type) {
        input.setAttribute('checked', '');
    }
    divMain.appendChild(input);
    const label = document.createElement('label');
    label.textContent = option.title;
    label.setAttribute('for', `swatch-0-${option.type}`);
    const image = document.createElement('img');
    image.classList.add('crossed-out');
    image.setAttribute('src', 'https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886');
    label.appendChild(image);
    divMain.appendChild(label);
    perent.appendChild(divMain);
}

function setRemoveButton(e) {
    const formData = new FormData();
    formData.append('productId', `${e.target.getAttribute('data-id')}`);
    const removeXhr = new XMLHttpRequest();
    removeXhr.open(
        'POST',
        'https://neto-api.herokuapp.com/cart/remove',
        true
    );
    removeXhr.addEventListener('load', () => {
        console.log(JSON.parse(removeXhr.responseText));
    });
    removeXhr.send(formData);

}

function setCartOptions(option) {
    const perent = document.getElementById('quick-cart');
    const divMain = document.createElement('div');
    divMain.classList.add('quick-cart-product', 'quick-cart-product-static');
    divMain.setAttribute('id', `quick-cart-product-${option.id}`);
    divMain.setAttribute('style', 'opacity: 1;');
    perent.appendChild(divMain);
    const divWrap = document.createElement('div');
    divWrap.classList.add('quick-cart-product-wrap');
    divMain.appendChild(divWrap);
    const productImg = document.createElement('img');
    productImg.setAttribute('src', `${option.pic}`);
    productImg.setAttribute('title', `${option.title}`);
    divWrap.appendChild(productImg);
    const spanOne = document.createElement('span');
    spanOne.classList.add('s1');
    spanOne.setAttribute('style', 'background-color: #000; opacity: .5');
    spanOne.textContent = `${(+option.quantity) * (+option.price)}`;
    divWrap.appendChild(spanOne);
    const spanTwo = document.createElement('span');
    spanTwo.classList.add('s2');
    divWrap.appendChild(spanTwo);
    const spanCount = document.createElement('span');
    spanCount.classList.add('count', 'hide', 'fadeUp');
    spanCount.setAttribute('id', `quick-cart-product-count-${option.id}`);
    spanCount.textContent = option.quantity;
    divMain.appendChild(spanCount);
    const spanRemove = document.createElement('span');
    spanRemove.classList.add('quick-cart-product-remove', 'remove');
    spanRemove.setAttribute('data-id', `${option.productId}`);
    divMain.appendChild(spanRemove);
    spanRemove.addEventListener('click', setRemoveButton);
}

function setCart(){
    const allProduct = document.getElementsByClassName('quick-cart-product');
    const perent = document.getElementById('quick-cart');
    const linkPay = document.createElement('a');
    linkPay.setAttribute('id', 'quick-cart-pay');
    linkPay.setAttribute('quickbeam', 'cart-pay');
    linkPay.classList.add('cart-ico');
    if(allProduct.length > 0) {
        linkPay.classList.add('open');
    }
    perent.appendChild(linkPay);
    const strongText = document.createElement('strong');
    strongText.classList.add('quick-cart-text');
    strongText.innerHTML = 'Оформить заказ<br>';
    linkPay.appendChild(strongText);
    const spanPrice = document.createElement('span');
    spanPrice.setAttribute('id', 'quick-cart-price');
    linkPay.appendChild(spanPrice);
    const allProductPrice = document.getElementsByClassName('s1');
    for (let item of allProductPrice) {
        spanPrice.textContent = `${+(spanPrice.textContent) + (+(item.textContent))}`;
    }
}

const colorXhr = new XMLHttpRequest();
colorXhr.open(
    'GET',
    'https://neto-api.herokuapp.com/cart/colors',
    true
);
colorXhr.addEventListener('load', () => {
    const colorOptions = JSON.parse(colorXhr.responseText);
    for (let option of colorOptions) {
        setColorOptions(option)
    }
    const allColor = document.querySelectorAll("input[name='color']");
    for (let color of allColor) {
        color.addEventListener('click', (e) => {
            for (let item of allColor) {
                item.removeAttribute('checked');
            }
            e.target.setAttribute('checked', '');
            localStorage.setItem('color', `${e.target.value}`);
        })
    }
    console.log(allColor);
    console.log(colorOptions);   
});
colorXhr.send();

const sizeXhr = new XMLHttpRequest();
sizeXhr.open(
    'GET',
    'https://neto-api.herokuapp.com/cart/sizes',
    true
);
sizeXhr.addEventListener('load', () => {
    const sizeOptions = JSON.parse(sizeXhr.responseText);
    for (let option of sizeOptions) {
        setSizeOptions(option)
    }
    const allSize = document.querySelectorAll("input[name='size']");
    for (let size of allSize) {
        size.addEventListener('click', (e) => {
            for (let item of allSize) {
                item.removeAttribute('checked');
            }
            e.target.setAttribute('checked', '');
            localStorage.setItem('size', `${e.target.value}`);
        })
    }
    console.log(allSize);
    console.log(sizeOptions);
})
sizeXhr.send();

const cartXhr = new XMLHttpRequest();
cartXhr.open(
    'GET',
    'https://neto-api.herokuapp.com/cart',
    true
);
cartXhr.addEventListener('load', () => {
    const productOptions = JSON.parse(cartXhr.responseText);
    for (let option of productOptions) {
        setCartOptions(option);
    }
    setCart();
    console.log(productOptions);
})
cartXhr.send();

const buttonAddToCart = document.getElementById('AddToCart');

function addProductToCart(e) {
    e.preventDefault();
    const productForm = document.getElementById('AddToCartForm');
    const formData = new FormData(productForm);
    formData.append('productId', `${productForm.getAttribute('data-product-id')}`);
    const addToCartXhr = new XMLHttpRequest();
    addToCartXhr.open(
    'POST',
    'https://neto-api.herokuapp.com/cart',
    true
    );
    addToCartXhr.addEventListener('load', () => {
        const newValueCart = JSON.parse(addToCartXhr.responseText);
        const cart = document.getElementById('quick-cart');
        cart.innerHTML = '';
        for (let option of newValueCart) {
            setCartOptions(option);
        }
        setCart();
        console.log(newValueCart);
    });
    addToCartXhr.send(formData);
}
buttonAddToCart.addEventListener('click', addProductToCart)
