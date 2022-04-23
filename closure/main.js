'use strict';

const firstFireBtn = document.querySelector('#firstBtn');
const secondFireBtn = document.querySelector('#secondBtn');
const firstCountFunction = getCountFunction();
const secondCountFunction = getCountFunction();

firstFireBtn.addEventListener('click', firstCountFunction, false);
secondFireBtn.addEventListener('click', secondCountFunction, false);

function getCountFunction() {
  let counter = 0;
  return ($event) => {
    console.log(`${$event.target.id}'s counter: ${++counter}`);
    // return ++counter;
  }
}
