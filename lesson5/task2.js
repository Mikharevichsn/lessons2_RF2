// У нас есть объект, 
// в котором хранятся зарплаты нашей команды. 
// Напишите код для суммирования всех зарплат 
// и сохраните результат в переменной sum. 
// Должно получиться 390. 
// Если объект salaries пуст, 
// то результат должен быть 0.

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Andrew: 200,
}

const values = Object.values(salaries);

console.log(values);

let sum = 0;

for (let item of values) {
    sum = sum + item;
    // sum += item;
}

console.log(sum);