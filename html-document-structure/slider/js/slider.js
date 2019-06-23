'use strict';
const buttons = document.getElementsByTagName('a');
const allSlides = document.querySelectorAll('.slide');
const slideConteiner = document.querySelector('.slides');
const firstSlide = Array.from(allSlides).find(el => el.previousElementSibling == null);
const lastSlide = Array.from(allSlides).find(el => el.nextElementSibling == null);
firstSlide.classList.add('slide-current');


function action(event) {
    let currentSlide = slideConteiner.querySelector('.slide-current');
    
    const nexSlideBtn = document.querySelector(`[data-action='next']`);
    const prevSlideBtn = document.querySelector(`[data-action='prev']`);
    const fistSlideBtn = document.querySelector(`[data-action='first']`);
    const lastSlideBtn = document.querySelector(`[data-action='last']`);

    if(event.currentTarget == prevSlideBtn) {
        currentSlide.classList.remove('slide-current');
        if (currentSlide.previousElementSibling !== null) {
            for (let button of buttons) {
                button.classList.remove('disabled');
            }
            currentSlide.previousElementSibling.classList.add('slide-current')
        } else {
            currentSlide.classList.add('slide-current');
            fistSlideBtn.classList.add('disabled');
            prevSlideBtn.classList.add('disabled');
        }
    }
    
    if(event.currentTarget == nexSlideBtn) {
        currentSlide.classList.remove('slide-current');
        if (currentSlide.nextElementSibling !== null) {
            for (let button of buttons) {
                button.classList.remove('disabled');
            }
            currentSlide.nextElementSibling.classList.add('slide-current');
        } else {
            currentSlide.classList.add('slide-current');
            lastSlideBtn.classList.add('disabled');
            nexSlideBtn.classList.add('disabled');
        }
    }

    if(event.currentTarget === fistSlideBtn) {
        currentSlide.classList.remove('slide-current');
        firstSlide.classList.add('slide-current');
        for (let button of buttons) {
            button.classList.remove('disabled');
        }
        fistSlideBtn.classList.add('disabled');
        prevSlideBtn.classList.add('disabled');
    }

    if(event.currentTarget === lastSlideBtn) {
        currentSlide.classList.remove('slide-current');
        lastSlide.classList.add('slide-current');
        for (let button of buttons) {
            button.classList.remove('disabled');
        }
        lastSlideBtn.classList.add('disabled');
        nexSlideBtn.classList.add('disabled');
    }     
}

for (let button of buttons) {
    button.addEventListener('click', action);
}