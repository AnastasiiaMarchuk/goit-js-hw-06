// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

let categories = document.querySelectorAll('li.item')

let amountCategories = categories.forEach((item, index) =>
    console.log(`Number of categories: ${categories.length}`)
      );

// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


categories.forEach((item) => {
  const title = item.querySelector('h2');
  const lists = item.querySelectorAll('li');
  console.log(`Category: ${title.textContent}\nElements: ${lists.length}`)
  });

