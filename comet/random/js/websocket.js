'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

ws.addEventListener('message', (event) => {
    console.log(event.data);
    const webSocketSection = document.getElementsByClassName('websocket')[0];
    const numbers = webSocketSection.getElementsByTagName('div');

    for (let number of numbers) {
        if(number.classList.contains('flip-it')) {
            number.classList.remove('flip-it');
        }

        if(+number.textContent == +event.data) {
            number.classList.add('flip-it')
        }
    }
})
