'use strict';

const leftEye = document.getElementsByClassName('cat_position_for_left_eye')[0];
const rightEye = document.getElementsByClassName('cat_position_for_rigth_eye')[0];
const cat = document.getElementsByClassName('cat')[0];
const catEye = document.getElementsByClassName('cat_eye_left')[0];

let shiftX = 0;
let shiftY = 0;

document.addEventListener('mousemove', event => {
    
    console.log(event.pageX, event.pageY);
    
    let x = event.pageX - (cat.offsetLeft + leftEye.offsetLeft);
    let y = event.pageY - (cat.offsetTop + leftEye.offsetTop);
    
    // const minX = leftEye.offsetLeft;
    // const minY = leftEye.offsetTop;
    // const maxX = leftEye.offsetLeft + leftEye.offsetWidth - catEye.offsetWidth;
    // const maxY = leftEye.offsetTop + leftEye.offsetHeight - catEye.offsetHeight;

    //  x = Math.min(x, maxX);
    //  x = Math.max(x, minX);

    console.log(cat.offsetLeft + leftEye.offsetLeft, cat.offsetTop + leftEye.offsetTop)
    catEye.style.left = `${x + 788}px`;  
    catEye.style.top = `${y}px`;
    console.log(catEye.style.left, catEye.style.top)
})