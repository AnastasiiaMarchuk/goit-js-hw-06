// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


let counterValue = 0;

decrementBtn.addEventListener('click', onClickDecrement)
function onClickDecrement(event){
    counterValue -= 1;
    value.textContent = `${counterValue}`
} 

incrementBtn.addEventListener('click', onClickIncrement)
function onClickIncrement(event){
    counterValue += 1;
    value.textContent = `${counterValue}`
} 



