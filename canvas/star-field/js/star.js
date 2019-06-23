'use strict';

const starField = document.getElementsByTagName('canvas')[0];
const contextField = starField.getContext('2d');
contextField.save();
contextField.beginPath();
contextField.fillRect(0, 0, 400, 200);

function newStars() {
    function randStarsQuantity() {
        let quantity = Math.random() * 200 + 200;
        return quantity;
    }
    const starsQuantity = randStarsQuantity();
    
    for (let i = 0; i <= starsQuantity; i++) {
        contextField.beginPath();
        const colors = [`#ffffff`, `#ffe9c4`, `#d4fbff`]
        function randColor () {
            let numbColor = 0 + Math.floor(3 * Math.random());
            return colors[numbColor];
        }
        function randBrightness() {
            let globalAlphaNumber = Math.random() * 0.2 + 0.8;
            return globalAlphaNumber;
        }
        function randX() {
            let x = Math.random() * 400;
            return x;
        }
        function randY() {
            let y = Math.random() * 200;
            return y;
        }
        function randStarSize() {
            let size = Math.random() * 1.1;
            return size;
        }
        const x = randX();
        const y = randY();
        const starSize = randStarSize();
    
        contextField.globalAlpha = randBrightness();
        contextField.fillStyle = randColor();
        contextField.arc(x, y, starSize, 0, 2 * Math.PI);
        contextField.fill();
    }
}


function creatNewStarsFeild() {
    contextField.beginPath();
    contextField.globalAlpha = 1; 
    contextField.fillStyle = 'black'; 
    contextField.fillRect(0, 0, 400, 200);
    newStars();
}

newStars();

starField.addEventListener('click', creatNewStarsFeild);
