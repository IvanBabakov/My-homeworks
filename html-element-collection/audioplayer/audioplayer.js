'use strict';
const player = document.getElementsByClassName('mediaplayer');

const audioControls = player[0].getElementsByTagName('audio');

const playPauseBtn = player[0].getElementsByClassName('playstate');

const play = playPauseBtn[0].getElementsByClassName('fa-play');
const pause = playPauseBtn[0].getElementsByClassName('fa-pause');
 
play[0].onclick = function () {
    player[0].classList.toggle('play');
    audioControls[0].play();
}
pause[0].onclick = function () {
    player[0].classList.toggle('play');
    audioControls[0].pause();
}

const stopBtn = player[0].getElementsByClassName('stop');
stopBtn[0].onclick = function () {
    player[0].classList.remove('play');
    audioControls[0].pause();
    audioControls[0].currentTime = 0;    
}

const playList = {
    'LA Chill Tour' : 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3', 
    'This is it band' : 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3',
    'LA Fusion Jam' : 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3'
}
const songNames = Object.keys(playList);
let step = 0;
const backBtn = player[0].getElementsByClassName('back');
backBtn[0].onclick = function () {
    player[0].classList.remove('play');
    audioControls[0].pause();
    audioControls[0].currentTime = 0;
    if(step > 0) {
        audioControls[0].src = playList[songNames[step -= 1]];
        player[0].classList.toggle('play');
        audioControls[0].play();
    } else {
        step = songNames.length - 1;
        audioControls[0].src = playList[songNames[step]];
        player[0].classList.toggle('play');
        audioControls[0].play();
    }
}

const nextBtn = player[0].getElementsByClassName('next');
nextBtn[0].onclick = function () {
    player[0].classList.remove('play');
    audioControls[0].pause();
    audioControls[0].currentTime = 0;
    if(step < songNames.length - 1) {
        audioControls[0].src = playList[songNames[step += 1]];
        player[0].classList.toggle('play');
        audioControls[0].play();
    } else {
        step = 0;
        audioControls[0].src = playList[songNames[step]];
        player[0].classList.toggle('play');
        audioControls[0].play();
    }
}


