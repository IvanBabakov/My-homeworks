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
    // input.setAttribute('checked', '');
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

const colorXhr = new XMLHttpRequest();
colorXhr.open(
    'GET',
    'https://neto-api.herokuapp.com/cart/colors',
    true
);
colorXhr.send();
colorXhr.addEventListener('load', () => {
    const colorOptions = JSON.parse(colorXhr.responseText);
    for (let option of colorOptions) {
        setColorOptions(option)
    }
    console.log(colorOptions)   
});

const sizeXhr = new XMLHttpRequest();
sizeXhr.open(
    'GET',
    'https://neto-api.herokuapp.com/cart/sizes',
    true
);
sizeXhr.send();
sizeXhr.addEventListener('load', () => {
    const sizeOptions = JSON.parse(sizeXhr.responseText);
    for (let option of sizeOptions) {
        setSizeOptions(option)
    }
    console.log(sizeOptions);
})

const cartXhr = new XMLHttpRequest();
cartXhr.open(
    'GET',
    'https://neto-api.herokuapp.com/cart',
    true
);
cartXhr.send();
cartXhr.addEventListener('load', () => {
    console.log(JSON.parse(cartXhr.responseText));
})
