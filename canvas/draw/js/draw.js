'use strict';

function canvasWindth() {
    const width = window.innerWidth;
    return width;
}

function canvasHeight() {
    const height = window.innerHeight;
    return height;
}

const canvas = document.getElementById('draw');
let w = canvasWindth();
let h = canvasHeight();

const drawCanvas = canvas.getContext('2d');
drawCanvas.canvas.width = w;
drawCanvas.canvas.height = h;

function drawing(event) {
    let x = event.clientX;
    let y = event.clientY;
    drawCanvas.beginPath();
    drawCanvas.moveTo(x, y);
}

// let needChangeColorLine = false;
let hslColor = ['0', '100%', '50%'];
function getColor() {
    return `hsl(${hslColor.join(',')})`;
}

let line = 100;
let checkWidthLine = false;

function tic(e) {
    changeColorLine(e);
    changeLieWidth();
    if(line === 100) {
<<<<<<< HEAD
        changeLieWidth = false;
    }
    if(line === 5) {
        changeLieWidth = true;
=======
        checkWidthLine = false;
    }
    if(line === 5) {
        checkWidthLine = true;
>>>>>>> 280caa404c573586de5c82304f0e0c62cc9a645c
    }
};

let color = 0;

function changeColorLine(e) {
    color += 1;
    let currentColorHue = +(hslColor[0]);
    let interval = 10;
    if ((color - currentColorHue) === interval) {
        if(color > 0 && color < 359) {
        hslColor[0] = `${color}`;
        drawing(e);
        }
    }
}

function changeLieWidth() {
<<<<<<< HEAD
   if(checkWidthLine) {
        line++;
   }
   line--;
=======
   if(checkWidthLine === true) {
        line++;
   } else {
        line--;    
   }
>>>>>>> 280caa404c573586de5c82304f0e0c62cc9a645c
}

function changeCanvas() {
    drawCanvas.clearRect(0, 0, w, h);
    const newW = canvasWindth();
    const newH = canvasHeight();
    drawCanvas.canvas.width = newW;
    drawCanvas.canvas.height = newH;
    hslColor[0] = '0';
}

window.addEventListener('resize', changeCanvas);

canvas.addEventListener('mousedown', drawing);
canvas.addEventListener('mousemove', (e) => {
    if(e.buttons === 1) {
        drawCanvas.strokeStyle = getColor();
        drawCanvas.lineWidth = line;
        drawCanvas.lineJoin = 'round';
        drawCanvas.lineCap = 'round';
        drawCanvas.lineTo(e.clientX, e.clientY);
        drawCanvas.stroke();
        tic(e)
    }
})
canvas.addEventListener('dblclick', changeCanvas);
// document.addEventListener('click', () => {
//     changeColorLine()
//     let newColor = getColor();
//     color = newColor;
// });