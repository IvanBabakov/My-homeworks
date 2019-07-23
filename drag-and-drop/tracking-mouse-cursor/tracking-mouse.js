'use strict';

const leftEye = document.getElementsByClassName('cat_position_for_left_eye')[0];
const rightEye = document.getElementsByClassName('cat_position_for_rigth_eye')[0];
const cat = document.getElementsByClassName('cat')[0];
const catEye = document.getElementsByClassName('cat_eye_left')[0];

let minX = leftEye.offsetLeft;
let minY = leftEye.offsetTop;
let maxX = leftEye.offsetLeft + leftEye.offsetWidth - catEye.offsetWidth;
let maxY = leftEye.offsetTop + leftEye.offsetHeight - catEye.offsetHeight;


document.addEventListener('mousemove', event => {
    let x = event.pageX - catEye.getBoundingClientRect().left;
    let y = event.pageY - catEye.getBoundingClientRect().top;
    x = Math.min(x, maxX);
    y = Math.min(y, maxY);
    x = Math.max(x, minX);
    y = Math.max(y, minY);
    catEye.style.left = `${x}px`;
    catEye.style.top = `${y}px`;
    console.log(x, y);
});