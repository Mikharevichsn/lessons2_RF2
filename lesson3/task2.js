// Напишите функцию min(a,b)
//которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }


function min(a, b) {
    return a < b ? a : b;
}

const result = min(16, 10);
console.log(result);


console.log(min(16, 10));