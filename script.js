'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (scoreNum) {
  document.querySelector('.score').textContent = scoreNum;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('No number');

    // guess high/low
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? 'Too High..!!' : 'Too low..!!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game..!!');
      displayScore('0');
    }

    // wins
  } else {
    displayMessage('Correct Guess..!!🎉');
    displayNumber(secret);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayNumber('?');

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
