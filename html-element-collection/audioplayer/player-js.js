'use strict'

const player = document.getElementsByClassName('mediaplayer')[0];
const controlsPlayer = player.getElementsByTagName('audio')[0];
const playBtn = document.getElementsByClassName('playstate')[0];
playBtn.onclick = controlsPlayer.play();
