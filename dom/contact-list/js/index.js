'use strict';
const newContactsList = JSON.parse(loadContacts());

const [contactsList] = document.getElementsByClassName('contacts-list');
function changeContacts(list) {
    for(let contact of list) {
        let string = '<li data-email =' + `${contact.email}` + 'data-phone =' + `${contact.phone}` + '><strong>' + `${contact.name}` + '</strong></li>';
        return string;
    }
}
 