// Напиши функцию findLargestNumber(numbers)
//которая ищет самое большое число в массиве.


// const numbers = [5, 17, 28, 32, 100, 654];
// // const numbers = [-23, -28, -32, -100, -654];

// let biggest = numbers[0];

// for(let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > biggest) {
//         biggest = numbers[i];
//     }
//     // console.log(i);
//     // console.log(numbers[i]);
// }

// console.log(biggest);


function findLargestNumber(numbers) {
    let biggest = numbers[0];
    for(let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
    }
    return biggest;
}

const res = findLargestNumber([1, 2, 3, 4, 5, 6]);
console.log(res);

console.log(findLargestNumber([1, 2, 3, 4, 5, 6, 7, -8, 9, 10]));