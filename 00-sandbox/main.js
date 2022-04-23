'use strict';

const fireBtn = document.querySelector('#fireBtn');

fireBtn.addEventListener('click', myFunction, false);

function myFunction($event) {
  console.log($event.target.id);
}
