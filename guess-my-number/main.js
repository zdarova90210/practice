'use strict';

let answerNumber = getAnswerNumber();

// Elements
const restartBtnEl = document.querySelector('.restart-btn');
const checkBtnEl = document.querySelector('.check-btn');
const answerEl = document.querySelector('.answer');
const userAnswerEl = document.querySelector('.user-answer');
const currScoreEl = document.querySelector('.current-score');
const hintEl = document.querySelector('.hint');
const highScoreEl = document.querySelector('.high-score');

checkBtnEl.addEventListener('click', checkAnswer);
restartBtnEl.addEventListener('click', doRestart);

function getAnswerNumber() {
  return Math.floor((Math.random() * 20) + 1);
}

function checkAnswer() {
  const userAnswer = userAnswerEl.value;
  if (Boolean(!userAnswer)) {
    console.log('Just type some number under check button 😉');
  } else if (answerNumber - userAnswer === 0) {
    congrats();
    updateHintText(userAnswer);
  } else {
    decreaseCurrentScore();
    updateHintText(userAnswer);
  }
}

function updateHintText(userAnswer) {
  hintEl.textContent = userAnswer < answerNumber ?
    `📉 Too low!` : userAnswer > answerNumber ?
      `📈 Too high!` : '🎉 Correct number!';
}

function decreaseCurrentScore() {
  const currScore = parseInt(currScoreEl.textContent, 10);
  if (currScore <= 0) {
    gameOver();
  } else {
    currScoreEl.textContent = String(currScore - 1);
  }
}

function congrats() {
  const currHighScore = highScoreEl.textContent;
  const currScore = parseInt(currScoreEl.textContent, 10);
  if (currScore > currHighScore) highScoreEl.textContent = currScore;
  answerEl.textContent = answerNumber;
  document.body.classList.add('won');
  userAnswerEl.disabled = true;
  checkBtnEl.disabled = true;
}

function gameOver() {
  console.log('Game over, try again?');
}

function doRestart() {
  answerNumber = getAnswerNumber();
  document.body.classList.remove('won');
  answerEl.textContent = '?';
  userAnswerEl.value = null;
  currScoreEl.textContent = 20;
  hintEl.textContent = 'Start guessing...';
  userAnswerEl.disabled = false;
  checkBtnEl.disabled = false;
}
