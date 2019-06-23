'use strict'

const tasks = document.getElementsByTagName('li');
const checkbox = document.getElementsByTagName('input');

function check() {
    for(let check of checkbox) {
        if(check.hasAttribute('checked')) {
            console.log('ok', check.id)
        } else {
            console.log('no')
        }
    }
}

for (let task of tasks) {
    task.addEventListener('click', check)
}