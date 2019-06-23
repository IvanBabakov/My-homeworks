'use strict';
const allTabs = document.querySelectorAll('.tabs nav a');

function changeTab(event) {
    event.preventDefault();
    let link = this.getAttribute('href');
    let xhr = new XMLHttpRequest();
    xhr.open(
        'GET',
        link,
        true
    )
    xhr.send();
    let data = JSON.parse(xhr.responseText);
    console.log(data);
}

for (let tab of allTabs) {
    tab.addEventListener('click', changeTab);
}