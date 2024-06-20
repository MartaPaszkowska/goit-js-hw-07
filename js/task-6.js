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
  let markup = '';
  for (let i = 0; i < amount; i++) {
    let pixels = 30 + i * 10;
    let divCode = `<div style="width:${pixels}px; height:${pixels}px; background-color:${getRandomHexColor()}"></div>`;

    markup += divCode;
  }
  boxes.insertAdjacentHTML('beforeend', markup);
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
