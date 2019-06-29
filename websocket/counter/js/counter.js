'use strict';

const connect = new WebSocket('wss://neto-api.herokuapp.com/counter');

function infoAllConnects(event) {
    const allOpenAndErrorConnects = JSON.parse(event.data);
    const allOpenConnects = document.getElementsByClassName('counter')[0];
    allOpenConnects.textContent = allOpenAndErrorConnects.connections;
    const allErrorConnects = document.getElementsByClassName('errors')[0];
    allErrorConnects.textContent = allOpenAndErrorConnects.errors;
}

connect.addEventListener('message', infoAllConnects);
window.addEventListener('beforeunload', () => {
    connect.onclose = function () {};
    connect.close(1000);
})
