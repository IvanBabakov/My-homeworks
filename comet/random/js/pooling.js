'use strict';

function pooling(url) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState != 4) return;

        if(xhr.status == 200) {
            console.log(xhr.responseText);
            const poolingNumbers = document.getElementsByClassName('pooling')[0];
            const allPoolingCards = poolingNumbers.getElementsByTagName('div');
            for (let card of allPoolingCards) {
                if(card.classList.contains('flip-it')) {
                    card.classList.remove('flip-it');
                }
                if(+card.textContent == +xhr.responseText) {
                    card.classList.add('flip-it');
                }
            }
        }

        setTimeout(pooling, 5000, url);
    })

    xhr.open(
        'GET',
        url,
        true
    );
    xhr.send();
}

pooling('https://neto-api.herokuapp.com/comet/pooling');