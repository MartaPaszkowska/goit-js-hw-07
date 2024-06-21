'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutPut = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  if (nameOutPut.textContent === '') {
    nameOutPut.textContent = 'Anonymous'.trim();
  } else {
    nameOutPut.textContent = event.currentTarget.value.trim();
  }
});
