// Напишите цикл,
// который предлагает ввести число большее 100 через prompt.
// Если посетитель ввёл другое число - попросить ввести ещё раз,
// и так далее.
// Цикл должен спрашивать число пока посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Отмена в промпт.

// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк не нужно.

// while (true) {
//   const userInput = prompt('Введите число больше 100');
//   if (userInput === null) break;

//   const num = Number(userInput);
//   if (num >= 100) {
//       break;
//   }
// }


let num = 0;
while(num < 100) {
    const userInput = prompt('Введите число больше 100');
    if (userInput === null) break;
    num = Number(userInput);
}



// let num = 0;
// let userInput;
// while(userInput !== null && num < 100) {
//     userInput = prompt('Введите число больше 100');
//     num = Number(userInput);
// }


console.log('вышли из цикла');
