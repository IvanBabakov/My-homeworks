'use strict'

const textArea = document.getElementsByClassName('textarea')[0];
const block = document.getElementsByClassName('block')[0];
const message = document.getElementsByClassName('message')[0];
let wait = false;

function debounce(callback, delay) {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            callback();
        }, delay);
    };
};

textArea.addEventListener('focus', () => {
    block.classList.add('active');    
})

textArea.addEventListener('blur', () => {
    block.classList.remove('active');
    message.classList.remove('view');   
})

textArea.addEventListener('keyup', debounce(() => {
    if (block.classList.contains('active')) {
        block.classList.remove('active');
        message.classList.add('view');
    }
    wait = true;
}, 2000))

textArea.addEventListener('keydown', () => {
    if(wait) {
        block.classList.add('active');
        message.classList.remove('view');
        wait = false;    
    }
})