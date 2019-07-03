'use strict'

const btnSetFull = document.getElementById('btnSetFull');
const btnSetEmpty = document.getElementById('btnSetEmpty');
const schemePlane = document.getElementById('seatMapDiv');
btnSetFull.setAttribute('disabled','');
btnSetEmpty.setAttribute('disabled','');

function createPlaneScheme(numberOfSeats, i, map) {
    const fragment = document.createDocumentFragment();
    const row = document.createElement('div');
    row.classList.add('row', 'seating-row', 'text-center');
    fragment.appendChild(row);
    const rowNumber = document.createElement('div');
    rowNumber.classList.add('col-xs-1', 'row-number');
    row.appendChild(rowNumber);
    const rowTitle = document.createElement('h2');
    // rowTitle.classList.add(' ');
    rowTitle.textContent = i + 1;
    rowNumber.appendChild(rowTitle);
    
    if(numberOfSeats === 6) {
        const block1 = document.createElement('div');
        block1.classList.add('col-xs-5');
        const block2 = document.createElement('div');
        block2.classList.add('col-xs-5');
        map.letters6.forEach(element => {
            if(block1.children.length < 3) {
                const seat = document.createElement('div');
                seat.classList.add('col-xs-4', 'seat');
                const seatLabel = document.createElement('span');
                seatLabel.classList.add('seat-label');
                seatLabel.textContent = element;
                seat.appendChild(seatLabel);
                block1.appendChild(seat);
            } else {
                const seat = document.createElement('div');
                seat.classList.add('col-xs-4', 'seat');
                const seatLabel = document.createElement('span');
                seatLabel.classList.add('seat-label');
                seatLabel.textContent = element;
                seat.appendChild(seatLabel);
                block2.appendChild(seat);
            }              
        })
        row.appendChild(block1);
        row.appendChild(block2);

        return fragment;
    }
    if(numberOfSeats === 4) {
        const block1 = document.createElement('div');
        block1.classList.add('col-xs-5');
        const block2 = document.createElement('div');
        block2.classList.add('col-xs-5');
        map.letters4.forEach(element => {
            if(block1.children.length < 3) {
                const seat = document.createElement('div');
                seat.classList.add('col-xs-4', 'seat');
                const seatLabel = document.createElement('span');
                seatLabel.classList.add('seat-label');
                seatLabel.textContent = element;
                seat.appendChild(seatLabel);
                block1.appendChild(seat);
            } else {
                const seat = document.createElement('div');
                seat.classList.add('col-xs-4', 'seat');
                const seatLabel = document.createElement('span');
                seatLabel.classList.add('seat-label');
                seatLabel.textContent = element;
                seat.appendChild(seatLabel);
                block2.appendChild(seat);
            }              
        })
        row.appendChild(block1);
        if(block2.children.length < 3) {
            const numberEmptySeats = new Array(3 - block2.children.length);
            numberEmptySeats.forEach(element => {
                const seat = document.createElement('div');
                seat.classList.add('col-xs-4', 'no-seat');
                block2.appendChild(seat);
            }) 
        }
        row.appendChild(block2);

        return fragment;
    } 
    if(numberOfSeats === 0) {
        const block1 = document.createElement('div');
        block1.classList.add('col-xs-5');
        const block2 = document.createElement('div');
        block2.classList.add('col-xs-5');
        map.letters6.forEach(element => {
            if(block1.children.length < 3) {
                const seat = document.createElement('div');
                seat.classList.add('col-xs-4', 'no-seat');
                block1.appendChild(seat);
            } else {
                const seat = document.createElement('div');
                seat.classList.add('col-xs-4', 'no-seat');
                block2.appendChild(seat);
            }              
        })
        row.appendChild(block1);
        row.appendChild(block2);

        return fragment;
    }
}

function showScheme(event) {
    event.preventDefault();
    const currentPlane = document.getElementById('acSelect');
    const xhr = new XMLHttpRequest();
    xhr.open(
        'GET',
        `https://neto-api.herokuapp.com/plane/${currentPlane.value}`
    )
    xhr.addEventListener('load', () => {
        const choiceTitle = document.getElementById('seatMapTitle');
        const noChoiceTitle = document.querySelector('h3.text-center');
        const planeMap = JSON.parse(xhr.responseText);
        console.log(planeMap);
        choiceTitle.textContent = `${planeMap.title} (${planeMap.passengers} пассажиров)`;
        btnSetFull.removeAttribute('disabled');
        btnSetEmpty.removeAttribute('disabled');
        // noChoiceTitle.setAttribute('hidden', '');
        if(schemePlane.children.length > 0) {
            while (schemePlane.firstChild) {
                schemePlane.removeChild(schemePlane.firstChild);
            }
        }
        planeMap.scheme.forEach((number, i) => {
            const currentRow = createPlaneScheme(number, i, planeMap);
            schemePlane.appendChild(currentRow);
        });
        const allSeats = schemePlane.getElementsByClassName('seat-label');
        for (let seat of allSeats) {
            seat.addEventListener('click', (event) => {
                if(event.target.parentElement.classList.contains('adult')) {
                    event.target.parentElement.classList.remove('adult');
                } else {
                    event.target.parentElement.classList.add('adult');
                }
            })
        }
    })
    xhr.send();
}

const bntShowScheme = document.getElementById('btnSeatMap');
bntShowScheme.addEventListener('click', showScheme)