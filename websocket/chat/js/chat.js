'use strict';

const chatConnection = new WebSocket('wss://neto-api.herokuapp.com/chat');
const chat = document.getElementsByClassName('chat')[0];
const content = chat.getElementsByClassName('messages-content')[0];
const messageStatus = chat.querySelector('.message-status');
const message = chat.querySelector('.messages-templates .message');

chatConnection.addEventListener('open', () => {
    const btnSendMessage = chat.getElementsByClassName('message-submit')[0];
    btnSendMessage.removeAttribute('disabled');
    const chatStatus = chat.querySelector('.chat-status');
    chatStatus.textContent = chatStatus.getAttribute('data-online');
    
    const currentStatus = messageStatus.cloneNode(true);
    const text = currentStatus.getElementsByClassName('message-text')[0];
    text.textContent = 'Пользователь появился в сети';
    content.appendChild(currentStatus);
})
chatConnection.addEventListener('message', (event) => {
    const currentMessage = message.cloneNode(true);
    const text = currentMessage.getElementsByClassName('message-text')[0];
    text.textContent = event.data;
})  