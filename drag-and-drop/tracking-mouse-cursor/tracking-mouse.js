'use strict';

const leftEye = document.getElementsByClassName('cat_position_for_left_eye')[0];
const rightEye = document.getElementsByClassName('cat_position_for_rigth_eye')[0];
const cat = document.getElementsByClassName('cat')[0];
const catEye = document.getElementsByClassName('cat_eye_left')[0];

let shiftX = 0;
let shiftY = 0;

let tic = 0;

document.addEventListener('mousemove', event => {
    if(tic == 0) {
        const bonds = event.target.getBoundingClientRect();
        shiftX = event.pageX - bonds.left - window.pageXOffset;
        shiftY = event.pageY - bonds.top - window.pageYOffset;    
        tic = 1;
    }
    
    let x = event.pageX - shiftX;
    let y = event.pageY - shiftY;
    // const minX = leftEye.offsetLeft;
    // const minY = leftEye.offsetTop;
    // const maxX = leftEye.offsetLeft + leftEye.offsetWidth - catEye.offsetWidth;
    // const maxY = leftEye.offsetTop + leftEye.offsetHeight - catEye.offsetHeight;

    //  x = Math.min(x, maxX);
    //  x = Math.max(x, minX);

    catEye.style.left = `${x}px`;  
    catEye.style.top = `${y}px`;

})