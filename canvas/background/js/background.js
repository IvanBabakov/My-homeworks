'use strict';

const canvas = document.getElementById('wall');
const context = canvas.getContext('2d');

context.beginPath();

const objectQuantity = Math.random()*150 + 50;

for (let i = 0; i <= objectQuantity; i++) {
    context.beginPath();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 1.1;
    context.fillStyle = 'black';
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fill();
}