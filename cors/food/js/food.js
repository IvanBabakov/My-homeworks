'use strict';

'use strict';

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

function addDataToFoodCard(data) {
    if(data.hasOwnProperty('id')) {
        const backgroundPic = document.querySelector('[data-pic]');
        backgroundPic.setAttribute('style', `background: url(${data['pic']})`);
        const title = document.querySelector('[data-title]');
        title.textContent = data['title'];
        const ingredients = document.querySelector('[data-ingredients]');
        ingredients.textContent = [...data['ingredients']];
    }
    if(data.hasOwnProperty('rating')) {
        const rating = document.querySelector('[data-rating]');
        rating.textContent = data['rating'].toFixed(2);
        const starRating = document.querySelector('[data-star]');
        starRating.setAttribute('style', `width: ${(100 * data['rating']) / 10}%`);
        const votes = document.querySelector('[data-votes]');
        votes.textContent = `${data['votes']} оценок`;
    }
    if(data.hasOwnProperty('consumers')) {
        const consumers = document.querySelector('[data-consumers]');
        for (let consumer of data['consumers']) {
            let newConsumer = document.createElement('img');
            newConsumer.src = consumer['pic'];
            newConsumer.title = consumer['name'];
            consumers.appendChild(newConsumer);
        }
        const total = document.createElement('span');
        total.textContent = `(+${data['total']})`;
        consumers.appendChild(total);
    }
}

loadData(`https://neto-api.herokuapp.com/food/42`).then(addDataToFoodCard);
loadData(`https://neto-api.herokuapp.com/food/42/rating`).then(addDataToFoodCard);
loadData(`https://neto-api.herokuapp.com/food/42/consumers`).then(addDataToFoodCard);
