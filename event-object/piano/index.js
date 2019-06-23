'use strict';
const piano = document.getElementsByClassName('set');
const allSounds = piano[0].getElementsByTagName('audio');
const allButtons = piano[0].getElementsByTagName('li');

const middle = [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
]

const lower = [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
]

const higher = [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
]

for (let i = 0; i <  allSounds.length; i++) {
    allSounds[i].src = middle[i];
}

function setRegimeSounds(regimeSounds) {
    for (let i = 0; i <  allSounds.length; i++) {
        allSounds[i].src = regimeSounds[i];
    }
} 

function selectSound() {
    let sound = this.getElementsByTagName('audio');
    if(this.classList.contains('current')) {
        this.classList.remove('current');
        sound[0].pause();
        sound[0].currentTime = 0;
    }
    this.classList.add('current');
    sound[0].play();
}

for (const button of allButtons) {
    button.addEventListener('click', selectSound)
}

function setRegimePiano(event) {
    if (event.shiftKey) {
        piano[0].classList.remove('middle');
        piano[0].classList.add('lower');
        setRegimeSounds(lower);
    }
    if(event.altKey) {
        piano[0].classList.remove('middle');
        piano[0].classList.add('higher');
        setRegimeSounds(higher);
    }
}

function returnRegimePiano(event) {
    if (!event.shiftKey) {
        piano[0].classList.remove('lower');
        piano[0].classList.add('middle');
        setRegimeSounds(middle);
    }
    if(!event.altKey) {
        piano[0].classList.remove('higher');
        piano[0].classList.add('middle');
        setRegimeSounds(middle);
    }
}

document.addEventListener('keydown', setRegimePiano);
document.addEventListener('keyup', returnRegimePiano);
