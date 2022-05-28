'use strict';

let secretNumber = getAnswerNumber();

// Elements
let currScore = 20;
const currScoreEl = document.querySelector('.current-score');
const answerEl = document.querySelector('.answer');
const userAnswerEl = document.querySelector('.user-answer');
const messageEl = document.querySelector('.message');
const highScoreEl = document.querySelector('.high-score');
const checkBtnEl = document.querySelector('.check-btn');
const restartBtnEl = document.querySelector('.restart-btn');

checkBtnEl.addEventListener('click', checkAnswer);
restartBtnEl.addEventListener('click', doRestart);

function getAnswerNumber() {
  return Math.floor((Math.random() * 20) + 1);
}

function checkAnswer() {
  const userAnswer = userAnswerEl.value;
  if (!userAnswer) {
    displayMessage('⛔ No number!');
    return;
  }
  if (secretNumber - userAnswer === 0) {
    congrats();
  } else {
    decreaseCurrentScore(parseInt(userAnswer, 10));
  }
}

function displayMessage(message) {
  messageEl.textContent = message;
}

function decreaseCurrentScore(usrAnswer) {
  currScore--;
  if (currScore <= 0) {
    gameOver();
  } else {
    displayMessage(usrAnswer > secretNumber ? `📈 Too high!` : `📉 Too low!`);
    currScoreEl.textContent = String(currScore - 1);
  }
}

function congrats() {
  displayMessage('🎉 Correct number!');
  const currHighScore = highScoreEl.textContent;
  const currScore = parseInt(currScoreEl.textContent, 10);
  if (currScore > currHighScore) highScoreEl.textContent = String(currScore);
  answerEl.textContent = secretNumber;
  document.body.classList.add('won');
  userAnswerEl.disabled = true;
  checkBtnEl.disabled = true;
}

function gameOver() {
  displayMessage('💥 Game over!');
}

function doRestart() {
  secretNumber = getAnswerNumber();
  document.body.classList.remove('won');
  answerEl.textContent = '?';
  userAnswerEl.value = null;
  currScore = 20;
  currScoreEl.textContent = '20';
  messageEl.textContent = 'Start guessing...';
  userAnswerEl.disabled = false;
  checkBtnEl.disabled = false;
}
