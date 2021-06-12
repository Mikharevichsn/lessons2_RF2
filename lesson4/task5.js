// Пример 5 - Стрелочные функции (implicit return)
// Выполните рефакторинг заменив объявление функции 
// на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

// const mult = (x, y, z) => {
//   return x * y * z;
// }

const mult = (x, y, z) => x * y * z;

console.log(mult(2, 2, 2));
console.log(mult(2, 4, 3));