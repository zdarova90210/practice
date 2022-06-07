'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const overlayEl = document.querySelector('.overlay');
const modalEl = document.querySelector('.modal');
const closeEls = document.querySelectorAll('.close-modal, .overlay');

init();

function showModal() {
  overlayEl.classList.remove('hidden');
  modalEl.classList.remove('hidden');
}

function closeModal() {
  overlayEl.classList.add('hidden');
  modalEl.classList.add('hidden');
}

function doKeyboardAction($event) {
  if ($event.key === 'Escape') closeModal();
}

function init() {
  document.body.addEventListener('keydown', doKeyboardAction);
  for (let i = 0; i < showModalBtns.length; i++) showModalBtns[i].addEventListener('click', showModal);
  for (let i = 0; i < closeEls.length; i++) closeEls[i].addEventListener('click', closeModal);
}
