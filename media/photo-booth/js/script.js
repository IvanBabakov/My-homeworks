'use strict';
const source = window.navigator;

if(source !== undefined ) {
    source.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => {
        const container = document.getElementsByClassName('app')[0];
        const videoElement = document.createElement('video');
        container.appendChild(videoElement);
        const video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        }
    }).catch(err => console.warn('oh, nooo!'))        
} else {
    console.log('error!')
}
