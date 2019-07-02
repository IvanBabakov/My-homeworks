'use strict';

const connect = new WebSocket('wss://neto-api.herokuapp.com/mouse');

showBubbles(connect);

function pointOfClick(event) {
    connect.send(JSON.stringify({
        x : `${event.pageX}`,
        y : `${event.pageY}`
    }))
}

const body = document.getElementsByTagName('body')[0];
body.addEventListener('click', pointOfClick);

connect.addEventListener('error', (event) => {
    console.log(event.data);
})