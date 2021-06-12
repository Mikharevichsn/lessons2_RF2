// Пример 2 - Дефолтные значения параметров функции
//Напишите функцию greet(name), 
// которая при вызове будет получать имя (например, «Василий») 
// и логировать строку «Привет, <имя>». 
// В случае отсутствующего аргумента выводить «Привет, гость»


// const greet = (name) => {
//     if (name === undefined) {
//     if (!name) {
//         return 'Привет, гость';
//     } else {
//         return `Привет, ${name}`;
//     }
// }

// const greet = (name) => {
//     if (name !== undefined) {
//         return `Привет, ${name}`;
//     }

//     return 'Привет, гость';
// }

// const greet = (name) => {
//     if (name) {
//         return `Привет, ${name}`;
//     }

//     return 'Привет, гость';
// }


const greet = (name = 'гость') => {
    return `Привет, ${name}`;
}


console.log(greet());
console.log(greet('Василий'));