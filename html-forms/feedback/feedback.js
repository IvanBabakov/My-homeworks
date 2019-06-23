const btnSend = document.querySelector('[type="submit"]');
const btnChange = document.querySelector('#output .button-contact');
const allFields = document.querySelectorAll('.form-group input, .form-group textarea');
const massegeAllFields = document.querySelectorAll('#output output');
const postIndex = document.querySelector('[name="zip"]');
postIndex.setAttribute('type', 'number');

function activateSendBtn() {
    let arrayAllFields = Array.from(allFields);
    let check = arrayAllFields.find(e => {
       return e.value.length === 0;
    })
    if(check === undefined) {
        btnSend.removeAttribute('disabled');
    } else {
        btnSend.setAttribute('disabled', '');
    }
}

function massege(event) {
    let idForMassegeField = event.target.name;
    let massegeField = Array.from(massegeAllFields).find(e => {
        return e.id === idForMassegeField;
    })
    if(massegeField !== undefined) {
    massegeField.value = event.target.value;
    }
}

for (let field of allFields) {
    field.addEventListener('input', activateSendBtn);
    field.addEventListener('change', massege);
}

const form = document.getElementsByClassName('contentform')[0];
const massegePreview = document.getElementById('output');
function showMassege(event) {
    event.preventDefault();
    massegePreview.classList.remove('hidden');
    form.classList.add('hidden')
}

function showForm(event) {
    event.preventDefault();
    massegePreview.classList.add('hidden');
    form.classList.remove('hidden');
}

btnSend.addEventListener('click', showMassege);
btnChange.addEventListener('click', showForm);
