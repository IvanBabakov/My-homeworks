'use strict';

const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open(
    'GET',
    'https://neto-api.herokuapp.com/book/',
    true
);
request.send();
function onLoad() {
    let allBooks = JSON.parse(request.responseText);
    let booksList = document.getElementById('content');
    booksList.innerHTML = '';
    for (let book of allBooks) {
        booksList.innerHTML = booksList.innerHTML + '<li ' + `id=${book.id}` + '>' + `<img src = ${book.cover.small}>` + '</li>';
    }
    let books = booksList.getElementsByTagName('li');
    for (let i = 0; i < books.length; i++) {
        let currentId = books[i].getAttribute('id');
        let bookId = allBooks[i].id;
        if(currentId === bookId) {
            books[i].removeAttribute('id');
            books[i].dataset.title = allBooks[i].title;
            books[i].dataset.author = allBooks[i].author.name;
            books[i].dataset.info = allBooks[i].info;
            books[i].dataset.price = allBooks[i].price;
        }
    }
}
