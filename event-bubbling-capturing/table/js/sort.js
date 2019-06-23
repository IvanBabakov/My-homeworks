'use strict';
// const allHeadline = document.getElementsByClassName('prop_name');

function handleTableClick(event) {
  let nameHeadline = event.target.getAttribute('data-prop-name');
  table.setAttribute('data-sort-by', nameHeadline);
      if(event.target.hasAttribute('data-dir')) {
        let number = +event.target.getAttribute('data-dir');
        console.log(number)
        if(number === 1) {
            event.target.setAttribute('data-dir','-1')
        } else {
            event.target.setAttribute('data-dir', '1')
        }
      } else {
        event.target.setAttribute('data-dir', '1');
      }
  let dirNumber = +event.target.getAttribute('data-dir');
  sortTable(nameHeadline, dirNumber);
}

// for (let headline of allHeadline) {
//     headline.addEventListener('click', handleTableClick)
// }