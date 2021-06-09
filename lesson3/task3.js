/*
Напиши функцию logItems(array), 
которая получает массив и использует цикл for, 
который для каждого элемента массива будет 
выводить в консоль сообщение в формате 
<номер элемента> - <значение элемента>. 
Нумерация элементов должна начинаться с 1.
Например для первого элемента массива 
['Mango', 'Poly', 'Ajax'] 
с индексом 0 будет выведено 
1 - Mango, а для индекса 2 выведет 3 - Ajax.
*/

// const arr = ['Mango', 'Poly', 'Ajax'];

// console.log(arr);

// // for (let i = 0; i <= arr.length - 1; i += 1) {
// for (let i = 0; i < arr.length; i += 1) {
//     console.log(`${i + 1} - ${arr[i]}`);
// }

function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}


logItems(['Red', 'Green', 'Blue', 'Pink', 'Orange'])
logItems(['Mango', 'Poly', 'Ajax'])

const myArr = ['chear', 'table', 'sofa'];
logItems(myArr);