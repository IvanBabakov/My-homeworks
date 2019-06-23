'use strict';
const formSignIn = document.getElementsByClassName('sign-in-htm')[0];
const formSignUp = document.getElementsByClassName('sign-up-htm')[0];
const buttons = document.getElementsByClassName('button');

function request(json, url) {
    const xhr = new XMLHttpRequest();
    xhr.open(
        'POST',
        url
    );
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log(xhr.responseText);
            const mass = document.getElementsByClassName('error-message')[1];
            mass.value = 'Пользователь Иван успешно авторизован';
        }
    }
    xhr.send(json);

    // if(xhr.status !== 200) {
    //     console.log('Ошибка');
    // } else {
    //     console.log(xhr.responseText);
    // }
}

function submitForm(event) {
    event.preventDefault();
    switch(event.target.value) {
        case 'Войти':
            let jsonSignIn = JSON.stringify({
                email: `${formSignIn.email.value}`,
                password: `${formSignIn.pass.value}`
            })
            request(jsonSignIn, 'https://neto-api.herokuapp.com/signin');
            console.log('Enter');
        break;
        case 'Зарегистрироваться':
            let jsonSignUp = JSON.stringify({
                email: `${formSignUp.email.value}`,
                password: `${formSignUp[name="password"].value}`,
                passwordcopy: `${formSignUp[name="passwordcopy"].value}`,
                name: `${formSignUp[name="name"].value}`
            });
            request(jsonSignUp, 'https://neto-api.herokuapp.com/signup')
            console.log('Registration');
        break;
    }
}

for (let btn of buttons) {
    btn.addEventListener('click', submitForm)
}