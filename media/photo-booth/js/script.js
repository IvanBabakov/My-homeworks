'use strict';
const source = window.navigator;

    source.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => {
        const container = document.getElementsByClassName('app')[0];
        const videoElement = document.createElement('video');
        container.appendChild(videoElement);
        const canvas = document.createElement('canvas');
        const ctx =  canvas.getContext('2d');
    
        const video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        }
    
        const controls = document.getElementsByClassName('controls')[0];
        controls.style.display = 'inline-block';
        const button = document.getElementById('take-photo');
        button.addEventListener('click', () => {          
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;
            ctx.drawImage(video, 0, 0);
            const imageList = document.getElementsByClassName('list')[0];
            const img = document.createElement('img');
            const url = canvas.toDataURL();
            img.src = url;
            imageList.appendChild(img);
        })
    }).catch(err => {
        const error = document.getElementById('error-message');
        error.textContent = `${err}`;
        error.style.display = 'inline-block'; 
    })       

