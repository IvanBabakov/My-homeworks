'use strict';

const navigation = document.getElementsByTagName('nav');

function openNavigation(event) {
    if(this !== event.currentTarget) {
        return;
    }
    if(event.ctrlKey && event.altKey && event.code === 'KeyT') {
        if(navigation[0].classList.contains('visible')) {
            navigation[0].classList.remove('visible');
            return;
        }
        navigation[0].classList.add('visible');
    }
}
document.addEventListener('keydown', openNavigation);

const secret = document.getElementsByClassName('secret');
let secretCode = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
let inputSecretCode = [];
function checkSecretCode(event) {
    if(this !== event.currentTarget) {
        return;
    }
    if(inputSecretCode.length < secretCode.length) {
    inputSecretCode.push(`${event.code}`);
    }
    if(inputSecretCode.length === secretCode.length) {
    for(let i = 0; i < inputSecretCode.length; i++) {
        if(inputSecretCode[i] !== secretCode[i]) {
            inputSecretCode = [];
            return;
        }
    }
    secret[0].classList.add('visible');
    }
}
document.addEventListener('keydown', checkSecretCode);
