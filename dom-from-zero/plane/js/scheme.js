'use strict'
function loadData(src) {
    function rundomName() {
        return 'callback' + `${Math.ceil(1000 - 1000*Math.random())}`;
    }
    const functionName = rundomName();
    return new Promise ((done, fail) => {
        window[functionName] = done;
        let newScript = document.createElement('script');
        newScript.src = `${src}?jsonp=${functionName}`;
        document.body.appendChild(newScript);
    })
}

function getSeatMap(data) {
    const element = document.createElement('div');
    element.textContent = `${data}`;
    body.appendChild(element);
}

const selectPlain = document.getElementById('acSelect');
const idPlanes = document.getElementsByTagName('option');
for(let id of selectPlain.options) {
    loadData(`https://neto-api.herokuapp.com/plane/${id.value}`)
        .then(getSeatMap);
}

const buttonSeatMap =  document.getElementById('btnSeatMap');

// buttonSeatMap.addEventListener('click', getSeatMap);

