// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.


// const number = document.querySelector('#controls > input');
// const boxesContainer = document.querySelector('#boxes');
// const btnCreate = document.querySelector('[data-create]');
// const btnDestroy = document.querySelector('[data-destroy]');

// btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroyBoxes);

// function createBoxes(event) {
//   const amount = Number(number.value);
//   const boxes = [];

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     boxes.push(box);
//   }

//   boxesContainer.append(...boxes);
// }

// function destroyBoxes(event) {
//   boxesContainer.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
// }
