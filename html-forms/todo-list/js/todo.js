'use strict'

const tasks = document.querySelectorAll('input');
const doneTasks = document.querySelector('output');
const listTasks = document.querySelector('.list-block');

function check() {
    if(this.hasAttribute('checked')) {
        this.removeAttribute('checked');
    } else {
        this.setAttribute('checked', '');
    }
    let checkedTasks = document.querySelectorAll('[checked]');
    doneTasks.value = `${tasks.length} / ${checkedTasks.length}`;
    
    if(tasks.length === checkedTasks.length) {
        listTasks.classList.add('complete')
    } else {
        listTasks.classList.remove('complete');
    }
}

for (let task of tasks) {
    task.addEventListener('click', check);
    let checkedTasks = document.querySelectorAll('[checked]');
    doneTasks.value = `${tasks.length} / ${checkedTasks.length}`;
}