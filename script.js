'use strict';

let random = Math.trunc(Math.random() * 20 + 1);
let get = false;
// let again = false;

function again() {
  get = false;
  random = Math.trunc(Math.random() * 20 + 1);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerText = '?';
  document.querySelector('.message').innerHTML = 'Start guessing...';
  console.log(random);
}
console.log(random);

function check() {
  if (!get) {
    let number_string = document.querySelector('.guess').value;
    let number = parseInt(number_string);
    let score = document.querySelector('.score');
    let highScore = document.querySelector('.highscore');
    if (number > random) {
      document.querySelector('.message').innerHTML = 'Your Guess is too High';
      score.innerHTML = score.innerHTML - 1;
    } else if (number < random) {
      document.querySelector('.message').innerHTML = 'Your Guess is too low';
      score.innerHTML = score.innerHTML - 1;
    } else if (number === random) {
      get = true;
      highScore.innerText = score.innerText;
      document.body.style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      highScore.innerText = score.innerText;
      document.querySelector('.number').innerText = number_string;
      document.querySelector('.message').innerHTML =
        'Congo. You correctly Guess Number';
    }
  } else {
    document.querySelector('.message').innerHTML =
      'you already guess number plz press agian to play agian';
  }
}

// "use strict";

// let random = Math.trunc(Math.random() * 20 + 1);
// let number = parseInt(document.querySelector('.guess').textContent);
// let score = 20;
// let message = document.querySelector('.message').textContent;
// document.querySelector('.number').textContent = random;

// document.querySelector('.check').addEventListener('click', function () {
//   if (number !== random) {
//     message = (number > random) ? '📉 number is High!' : '📈 number is Low!'
//   }
// });