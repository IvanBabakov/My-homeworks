'use strict';

function changeHTML(data) {
    const dataUsername = document.querySelector('[data-username]');
    dataUsername.innerHTML = data['username'];
    const dataDescription = document.querySelector('[data-description]');
    dataDescription.innerHTML = data['description'];
    const dataWallpaper = document.querySelector('[data-wallpaper]');
    dataWallpaper.src = data['wallpaper'];
    const dataPic = document.querySelector('[data-pic]');
    dataPic.src = data['pic'];
    const dataFollowing = document.querySelector('output[data-following]');
    dataFollowing.innerHTML = data['following'];
    const dataFollowers = document.querySelector('output[data-followers]');
    dataFollowers.innerHTML = data['followers'];
    const dataTweets = document.querySelector('output[data-tweets]');
    dataTweets.innerHTML = data['tweets'];
}

function addScript(src) {
    const func = 'load';
    return new Promise ((done, faile) => {
    window[func] = done;
    let newScript = document.createElement('script');
    newScript.src = `${src}?jsonp=${func}`;
    document.body.appendChild(newScript);
    });
}

addScript('https://neto-api.herokuapp.com/twitter/jsonp').then(changeHTML);



