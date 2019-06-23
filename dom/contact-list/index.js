'use strict';
const newContactsList = JSON.parse(loadContacts());

const contactsList = document.getElementsByClassName('contacts-list');
function changeList(contacts) {
    let list = [];
    for(let contact of contacts) {
        list.push('<li><strong>' + `${contact.name}` + '</strong></li>');
    }
    contactsList[0].innerHTML = list.join('');
    let allContacts = Array.from(contactsList[0].getElementsByTagName('li'));
    allContacts.forEach((el, index) => {
        el.dataset.email = contacts[index].email;
        el.dataset.phone = contacts[index].phone;
    });
}

document.addEventListener('DOMContentLoaded', changeList(newContactsList));