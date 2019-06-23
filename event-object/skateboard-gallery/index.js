'use strict';

const gallery = document.getElementById('nav');
const fullImage = document.getElementById('view');

function selectImage(event) {
    event.preventDefault();

    if (this.classList.contains('gallery-currentt')) {
        return;
    }
    const current = gallery.getElementsByClassName('gallery-current');
    for (const img of current) {
        img.classList.remove('gallery-current');
    }
    this.classList.add('gallery-current');
    fullImage.src = this.href;
}

const allLink = gallery.getElementsByTagName('a');
for(const link of allLink) {
    link.addEventListener('click', selectImage)
}