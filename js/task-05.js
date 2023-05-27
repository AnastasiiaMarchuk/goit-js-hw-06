// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputValue = document.querySelector('#name-input')
let outputValue = document.querySelector('#name-output')

inputValue.addEventListener('input', onInputChange);

function onInputChange(event) {
    const inputText = event.currentTarget.value.trim();
    outputValue.textContent = inputText !== '' ? inputText : 'Anonymous';
  }

outputValue.textContent = inputValue.value

