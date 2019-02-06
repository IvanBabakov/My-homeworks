'use strict'
const drumPlay = document.getElementsByClassName('drum-kit__drum');

for (let drum of drumPlay) {
    drum.onclick = function () {
        let play = drum.getElementsByTagName('audio');
        play[0].play();
    }
}
