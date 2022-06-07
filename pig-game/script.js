'use strict';

let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];
let isPlaying = false;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const totalScore0El = document.querySelector('#score--0');
const totalScore1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewGameEl = document.querySelector('.btn--new');

startNewGame();

btnRollEl.addEventListener('click', rollTheDice);
btnHoldEl.addEventListener('click', hold);
btnNewGameEl.addEventListener('click', startNewGame);

function rollTheDice() {
  if (isPlaying) {
    const diceNumber = getRandomDiceNumber();
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    if (diceNumber === 1) {
      switchPlayer();
    } else {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }
  }
}

function hold() {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = String(scores[activePlayer]);
    if (scores[activePlayer] >= 20) {
      isPlaying = false;
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
}

function getRandomDiceNumber() {
  return Math.trunc(Math.random() * 6) + 1;
}

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = '0';
  if (activePlayer === 0) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    activePlayer = 1;
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    activePlayer = 0;
  }
  currentScore = 0;
}

function startNewGame() {
  isPlaying = true;
  currentScore0El.textContent = '0';
  currentScore1El.textContent = '0';
  totalScore0El.textContent = '0';
  totalScore1El.textContent = '0';
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  diceEl.classList.add('hidden');
  document.querySelectorAll('.player').forEach(player => player.classList.remove('player--active', 'player--winner'));
  document.querySelector('.player--0').classList.add('player--active');
}
