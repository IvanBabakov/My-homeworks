'use strict';

const chatConnection = new WebSocket('wss://neto-api.herokuapp.com/chat');
const chat = document.getElementsByClassName('chat')[0];
const content = chat.getElementsByClassName('messages-content')[0];
const messageStatus = chat.querySelector('.message-status');
const messageLoading = chat.querySelector('.messages-templates .loading');
const message = messageLoading.nextElementSibling;
const messagePersonal = chat.querySelector('.message-personal');
const btnSendMessage = chat.getElementsByClassName('message-submit')[0];
const chatStatus = chat.querySelector('.chat-status');
const messageInput = chat.querySelector('.message-input');

chatConnection.addEventListener('open', () => {
    btnSendMessage.removeAttribute('disabled');    
    chatStatus.textContent = chatStatus.getAttribute('data-online');
    
    const currentStatus = messageStatus.cloneNode(true);
    const text = currentStatus.getElementsByClassName('message-text')[0];
    text.textContent = 'Пользователь появился в сети';
    content.appendChild(currentStatus);
})
chatConnection.addEventListener('message', (event) => {
    console.log(event.data);
    const currentMessage = message.cloneNode(true);
    const text = currentMessage.getElementsByClassName('message-text')[0];
    const time = currentMessage.getElementsByClassName('timestamp')[0];
    if(event.data == '...') {
        const nowTyping = messageStatus.cloneNode(true);
        const textStatus = nowTyping.getElementsByClassName('message-text')[0];
        textStatus.textContent = 'Пользователь печатает сообщение';
        content.appendChild(nowTyping);
    } else {
        text.textContent = event.data;
        let currentTime = new Date();
        time.textContent = `${currentTime.getHours()} : ${currentTime.getMinutes()}`;
        content.appendChild(currentMessage);
    }
})  

btnSendMessage.addEventListener('click', (event) =>{
    event.preventDefault();
    const currentPersonalMessage = messagePersonal.cloneNode(true);
    const text = currentPersonalMessage.getElementsByClassName('message-text')[0];
    const time = currentPersonalMessage.getElementsByClassName('timestamp')[0];
    text.textContent = messageInput.value;
    let currentTime = new Date();
    time.textContent = `${currentTime.getHours()} : ${currentTime.getMinutes()}`;
    content.appendChild(currentPersonalMessage);
    chatConnection.send(messageInput.value);
    messageInput.value = '';
})

chatConnection.addEventListener('close', (event) => {
    console.log(event.data);
    btnSendMessage.setAttribute('disabled');    
    chatStatus.textContent = chatStatus.getAttribute('data-offline');
    
    const currentStatus = messageStatus.cloneNode(true);
    const text = currentStatus.getElementsByClassName('message-text')[0];
    text.textContent = 'Пользователь не в сети';
    content.appendChild(currentStatus);
})