'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');

editor.addEventListener('update', () => {
    const ctx = canvas.getContext('2d');
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const binary = Uint8Array.from(image.data);
    console.log(binary.buffer);
    ws.send(binary);
})

