'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    if (amount > 0 && amount <= 100) {
      let pixels = 30 + i * 10;
      const divCode = `<div style="width:${pixels}px; height:${pixels}px; background-color:${getRandomHexColor()}"></div>`;
      boxes.insertAdjacentHTML('beforeend', divCode);
    }
  }
}

createBtn.addEventListener('focus', () => {
  const numberOfBoxes = parseInt(input.value);
  createBoxes(numberOfBoxes);
  input.value = '';
});
createBtn.addEventListener('blur', () => {
  boxes.innerHTML = '';
});
destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  input.value = '';
});
