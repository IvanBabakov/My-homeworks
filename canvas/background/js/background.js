'use strict';

const canvas = document.getElementById('wall');
const ctx = canvas.getContext('2d');
const objectQuantity = Math.random()*150 + 50;

canvas.height = window.innerHeight; // масштабирую canvas
canvas.width = window.innerWidth;

function nextPoint(x, y, time) {
    return {
      x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
      y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
    };
}

ctx.save();
for (let i = 0; i <= objectQuantity/2; i++) {
    const size = Math.random()*(0.6 - 0.1) + 0.1;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5 * size;
    ctx.beginPath();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 12 * size;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
ctx.restore();

ctx.save();
for (let i = 0; i <= objectQuantity/2; i++) {
    const size = Math.random()*(0.6 - 0.1) + 0.1;
    const angle = (Math.random() * 360) * Math.PI/180;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5 * size;
    ctx.beginPath();
    ctx.rotate(angle);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20*size, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20*size, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 20*size);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 20*size);   
    ctx.closePath();
    ctx.stroke();
}
ctx.restore();  
