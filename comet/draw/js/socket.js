'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');

editor.addEventListener('update', () => {
    canvas.toBlob( function(blob) {
        ws.send(blob);
    })
})

