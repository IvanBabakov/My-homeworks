'use strict';
const objectQuantity = Math.random()*150 + 50;

const arrayFunction = [
  function(x, y, time) {
      return {
        x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
        y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
      };
  },
  function(x, y, time) {
    return {
      x: x + Math.sin((x + (time / 10)) / 100) * 5,
      y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
    }
  }
]

function draw() {
  const canvas = document.getElementById('wall');
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight; // масштабирую canvas
  canvas.width = window.innerWidth;
  ctx.save();
  // const x = Math.random() * canvas.width;
  // const y = Math.random() * canvas.height;

  for (let i = 0; i <= objectQuantity/2; i++) {
    ctx.save();

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const funPoint = arrayFunction[Math.round(Math.random())];
    const point = funPoint(x, y, Date.now());
    const size = Math.random()*(0.6 - 0.1) + 0.1;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5 * size;
    ctx.beginPath();
    const radius = 12 * size;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();
  }
  
  for (let i = 0; i <= objectQuantity/2; i++) {
    ctx.save();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const funPoint = arrayFunction[Math.round(Math.random())];
    const point = funPoint(x, y, Date.now());
    const size = Math.random()*(0.6 - 0.1) + 0.1;
    const angle = (Math.random() * 360) * Math.PI/180;
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

    ctx.restore();
  }
  
  ctx.restore();
}

// draw();
setInterval(draw, 50);