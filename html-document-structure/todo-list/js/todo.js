'use strict';
const listOfActs = document.querySelectorAll('input');
const doneList = document.getElementsByClassName('done')[0];
const undoneList = document.getElementsByClassName('undone')[0];

function check(event) {
    if(event.currentTarget.hasAttribute('checked')) {
        event.currentTarget.removeAttribute('checked');
        undoneList.appendChild(event.currentTarget.parentElement);
        return;
    }
    event.currentTarget.setAttribute('checked', '');
    doneList.appendChild(event.currentTarget.parentElement);
}

for (let act of listOfActs) {
    act.addEventListener('click', check);
}
