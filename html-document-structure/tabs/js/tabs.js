'use strict';
const navigation = document.querySelector('.tabs-nav');
const tab = navigation.querySelector('li');
const articls = document.querySelectorAll(`[data-tab-title]`);

for (let article of articls) {
    let newTab = tab.cloneNode(true);
    newTab.querySelector('a').textContent = article.getAttribute('data-tab-title');
    newTab.querySelector('a').classList.add(`${article.getAttribute('data-tab-icon')}`);
    navigation.appendChild(newTab);
}

tab.parentNode.removeChild(tab);

const allTabs = navigation.querySelectorAll('li');
const firstTab = navigation.querySelector('li');

firstTab.classList.add('ui-tabs-active');
for(let tab of allTabs) {
    let titleTab = tab.textContent;
    let article = Array.from(articls).find((el) => el.getAttribute('data-tab-title') === titleTab);
    if(!tab.classList.contains('ui-tabs-active')) {
        article.classList.add('hidden');
    }
}

function action(event) {
    if(event.currentTarget.classList.contains('ui-tabs-active')) {
        return;
    }
    for (let tab of allTabs) {
        tab.classList.remove('ui-tabs-active');
    }
    event.currentTarget.classList.add('ui-tabs-active')
    
    for (let article of articls) {
        article.classList.remove('hidden');
    }

    for(let tab of allTabs) {
        let titleTab = tab.textContent;
        let article = Array.from(articls).find((el) => el.getAttribute('data-tab-title') === titleTab);
        if(!tab.classList.contains('ui-tabs-active')) {
            article.classList.add('hidden');
        }
    }
}

for (let tab of allTabs) {
    tab.addEventListener('click', action)
}

