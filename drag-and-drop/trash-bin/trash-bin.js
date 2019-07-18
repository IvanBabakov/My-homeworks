'use strict'

let movedLogo = null;

document.addEventListener('mousedown', event => {
    if(event.target.classList.contains('logo')) {
        movedLogo = event.target;
    }
})

document.addEventListener('mousemove', event => {
    if(movedLogo) {
        event.preventDefault();
        movedLogo.style.left = `${event.pageX}px`;
        movedLogo.style.top = `${event.pageY}px`;
        movedLogo.classList.add('moving');
    }
})