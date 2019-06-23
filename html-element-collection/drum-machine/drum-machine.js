<<<<<<< HEAD
'use strict';
const clap = document.getElementsByClassName('key-clap');
const audio = clap.getElementsByTagName('audio');
audio.src = 'https://netology-code.github.io/hj-homeworks/html-element-collection/drum-machine/wav/clap.wav';
=======
'use strict'
const drumPlay = document.getElementsByClassName('drum-kit__drum');

for (let drum of drumPlay) {
    drum.onclick = function () {
        let play = drum.getElementsByTagName('audio');
        play[0].play();
    }
}
>>>>>>> 280caa404c573586de5c82304f0e0c62cc9a645c
