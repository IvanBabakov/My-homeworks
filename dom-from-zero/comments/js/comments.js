'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  const comments = list.map(createComment)
  const fragment = comments.reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
  }, document.createDocumentFragment())
  commentsContainer.appendChild(fragment);
}

function createComment(comment) {
  const element = document.createElement('div');
  element.classList.add('comment-wrap');

  const elementPhoto = document.createElement('div');
  elementPhoto.classList.add('photo');
  elementPhoto.setAttribute('title', `${comment.author.name}`);
  element.appendChild(elementPhoto);
  const elementAvatar = document.createElement('div');
  elementAvatar.classList.add('avatar');
  elementAvatar.setAttribute('style', `background-image: url(${comment.author.pic})`);
  elementPhoto.appendChild(elementAvatar);

  const elementComment = document.createElement('div');
  elementComment.classList.add('comment-block');
  element.appendChild(elementComment);
  
  const elementText = document.createElement('p');
  elementText.classList.add('comment-text');
  elementText.textContent = comment.text.split('/n');
  elementComment.appendChild(elementText);
  
  const elementBottom = document.createElement('div');
  elementBottom.classList.add('bottom-comment');
  elementComment.appendChild(elementBottom);
  const elementDate = document.createElement('div');
  elementDate.classList.add('comment-date');
  elementDate.textContent = new Date(comment.date).toLocaleString('ru-Ru');
  elementBottom.appendChild(elementDate);
  const elementAction = document.createElement('ul');
  elementAction.classList.add('comment-actions');
  elementBottom.appendChild(elementAction);
  const elementComplain = document.createElement('li');
  elementComplain.classList.add('complain');
  elementComplain.textContent = 'Пожаловаться';
  elementAction.appendChild(elementComplain); 
  const elementReply = document.createElement('li');
  elementReply.classList.add('reply');
  elementComplain.textContent = 'Ответить';
  elementAction.appendChild(elementReply);

  return element;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);
