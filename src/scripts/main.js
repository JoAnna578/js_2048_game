'use strict';
// src/scripts/main.js
import { Game } from '../modules/Game.class.js';

const startBtn = document.querySelector('.button.start');
const restartBtn = document.querySelector('.button.restart');
const scoreEl = document.querySelector('.game-score');
const messageContainer = document.querySelector('.message-container'); 
const loseMessage = document.querySelector('.message-lose');
const winMessage = document.querySelector('.message-win');
const startMessage = document.querySelector('.message-start');

const game = new Game();

// Funkcja do aktualizacji UI
function render() {
  const board = game.getState(); // eslint-disable-line no-unused-vars
  scoreEl.textContent = game.getScore();

  // Aktualizacja statusu gry
  if (game.getStatus() === 'win') {
    winMessage.classList.remove('hidden');
  } else {
    winMessage.classList.add('hidden');
  }

  if (game.getStatus() === 'lose') {
    loseMessage.classList.remove('hidden');
  } else {
    loseMessage.classList.add('hidden');
  }

  startMessage.classList.add('hidden');
  // TODO: Aktualizacja komórek na planszy
}

// Obsługa przycisku Start
startBtn.addEventListener('click', () => {
  game.start();
  render();
  startBtn.classList.add('hidden');
  restartBtn.classList.remove('hidden');
});

// Obsługa przycisku Restart
restartBtn.addEventListener('click', () => {
  game.restart();
  render();
});

// Obsługa klawiszy strzałek
document.addEventListener('keydown', (evt) => {
  switch (evt.key) {
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
    default:
      return;
  }
  render();
});


