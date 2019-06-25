'use strict';

const showCount = document.getElementById('counter');
const buttons = document.getElementsByTagName('button');

if(localStorage.getItem('counter') === null) {
    localStorage.setItem('counter', '0');
    showCount.textContent = localStorage.getItem('counter');
} else {
    showCount.textContent = localStorage.getItem('counter');    
}

function changeCounter(event) {
    let currentCount = localStorage.getItem('counter');
    if(event.target.id === 'increment') {
        localStorage.setItem('counter', `${+currentCount + 1}`);
    } else if(event.target.id === 'decrement') {
        if (currentCount > 0) {
            localStorage.setItem('counter', `${+currentCount - 1}`);
        }
    } else if(event.target.id === 'reset') {
        localStorage.setItem('counter', '0');
    }
    showCount.textContent = localStorage.getItem('counter');
}

for (let btn of buttons) {
    btn.addEventListener('click', changeCounter);
}