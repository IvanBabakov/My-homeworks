'use strict';

function addDataToProfile(data) {
    if(data.hasOwnProperty('id')) {
        let id = data['id'];
        const nameProfile = document.querySelector('[data-name]');
        nameProfile.innerHTML = data['name'];
        const descriptionProfile = document.querySelector('[data-description]');
        descriptionProfile.textContent = data['description'];
        const picProfile = document.querySelector('[data-pic]');
        picProfile.setAttribute('src', data['pic']);
        const positionProfile = document.querySelector('[data-position]');
        positionProfile.textContent = data['position'];
        return id;
    }
    
    for(let tech of data) {
        const technologies = document.querySelector('[data-technologies]');
        const newTech = document.createElement('span');
        newTech.classList.add('devicons', `devicons-${tech}`);
        technologies.appendChild(newTech);
    }
    const content = document.getElementsByClassName('content')[0];
    content.style = 'display: initial;';
}

function loadData(src, id) {
    src = `${src}`.replace(':id', `${id}`);
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

loadData('https://neto-api.herokuapp.com/profile/me').then(addDataToProfile).
then(id => loadData('https://neto-api.herokuapp.com/profile/:id/technologies', id)).then(addDataToProfile)