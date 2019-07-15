'use strict';



function longPooling() {
    const longXhr = new XMLHttpRequest();
    longXhr.addEventListener('load', () => {
        const responseArray = longXhr.responseText.split('');
        const responseNumber = responseArray.map((e) => { if(e != ' ') return e}).join('');
        const longPoolingSection = document.getElementsByClassName('long-pooling')[0];
        const numbers = longPoolingSection.getElementsByTagName('div');
        
        for (let number of numbers) {
            if(number.classList.contains('flip-it')) {
                number.classList.remove('flip-it')
            }

            if(+number.textContent == +responseNumber) {
                number.classList.add('flip-it');    
            }
        }
        
        longPooling();
    })
    longXhr.open(
        'GET',
        'https://neto-api.herokuapp.com/comet/long-pooling',
        true
    );
    longXhr.send();
}

longPooling();
