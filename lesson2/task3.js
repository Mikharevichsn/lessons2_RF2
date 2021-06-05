// При помощи цикла for 
// выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

const min = 5;
const max = 16;

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// for (let i = 2; i <= 10; i += 1) {
//     console.log('index forBegin = ', i);
//     if (i % 2 === 0) {
//         console.log(i);
//     } else {
//         continue;
//     }
//     //
//     //
//     //
//     //
//     //
//     console.log('index forEnd = ', i);
// }


// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }