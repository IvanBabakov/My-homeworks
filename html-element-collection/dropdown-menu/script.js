'use strict'

const menu = document.getElementsByClassName('wrapper-dropdown');
menu[0].onclick = function() {
    menu[0].classList.toggle('active');
};