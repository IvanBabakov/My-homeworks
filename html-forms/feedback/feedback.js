'use strict'
const buttonSend = document.querySelector("button[type='submit']");

const allFields = document.querySelectorAll('.form-group input, .form-group textarea');
const massegeAllFilds = document.querySelectorAll('#output output');

function massege(event) {
        let idForOutput = event.target.name;
        let massegFiel = Array.from(massegeAllFilds).find(e => {
            return e.id === idForOutput;
        })
        massegFiel.value = event.target.value;
        console.log(idForOutput);
        console.log(massegFiel.value);
}

for (let field of allFields) {
    field.addEventListener('change', massege)
}