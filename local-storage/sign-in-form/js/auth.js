'use strict';
const formSignIn = document.getElementsByClassName('sign-in-htm')[0];
const formSignUp = document.getElementsByClassName('sign-up-htm')[0];
const buttons = document.getElementsByClassName('button');

function request(json, url, target) {
    const xhr = new XMLHttpRequest();
    xhr.open(
        'POST',
        url
    );
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            const respons = JSON.parse(xhr.responseText);
            const mass = target == 'Войти' ? document.querySelector('.sign-in-htm > .error-message') : document.querySelector('.sign-up-htm > .error-message');
            if(respons.error) {
                mass.value = respons.message;
            } else {
                const nameUser = respons.name;
                if(target == 'Войти') {
                mass.value = `Пользователь ${nameUser} успешно авторизован`;
                } else {
                mass.value = `Пользователь ${nameUser} успешно зарегистрирован`;        
                }
            }
        }
    };
    xhr.send(json);
}

function submitForm(event) {
    event.preventDefault();
    switch(event.target.value) {
        case 'Войти':
            let jsonSignIn = JSON.stringify({
                email: `${formSignIn.email.value}`,
                password: `${formSignIn.pass.value}`
            })
            request(jsonSignIn, 'https://neto-api.herokuapp.com/signin', event.target.value);
        break;
        case 'Зарегистрироваться':
            let jsonSignUp = JSON.stringify({
                email: `${formSignUp.email.value}`,
                password: `${formSignUp[name="password"].value}`,
                passwordcopy: `${formSignUp[name="passwordcopy"].value}`,
                name: `${formSignUp[name="name"].value}`
            });
            request(jsonSignUp, 'https://neto-api.herokuapp.com/signup', event.target.value)
        break;
    }
}

for (let btn of buttons) {
    btn.addEventListener('click', submitForm)
}