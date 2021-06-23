
// const printText = (text) => {
//     console.log(text);
// }

// printText('привет!');

// -----------

// const functionLauncher = (callback) => {
//     console.log(111);
//     callback();
//     console.log(222);
// }

// const nyFunc = () => {
//     console.log('Я напечатался из callback');
// }

// functionLauncher(nyFunc);

// -----------




// myMap
// написать функцию, которая принимает массив и callback
// создает новый массив в который кладет 
// результат callback по каждому элементу массива







// написать функцию, которая принимает колбэк 
// и проходит по массиву 
// и применяет callback к каждому элементу
// переприсваивая результат callback в элемент массива

// const arr = [100, 200, 300, 400];

// const changeArray = (callback) => {
//     for (let i = 0; i < arr.length; i += 1) {
//         console.log(arr[i]);
//         console.log(callback);
//         arr[i] = callback(arr[i]);
//         console.log(arr[i]);
//         console.log('---');
//     }
// }

// const incrementByOne = (num) => {
//     return num + 1;
// }

// // changeArray(incrementByOne);


// changeArray((num) => num - 50);
// // const makeMinus50 = (num) => num - 50;
// // changeArray(makeMinus50);

// console.log('*******');

// changeArray(    (x) => x * 2      );

// console.log('*******');

// changeArray((el) => String(el));

// console.log('*******');

// changeArray((str) => 'кукуруза! ' + str);




// ------


// const changeArray = (callback, anyArray) => {
//     for (let i = 0; i < anyArray.length; i += 1) {
//         console.log(anyArray[i]);
//         console.log(callback);
//         anyArray[i] = callback(anyArray[i]);
//         console.log(anyArray[i]);
//         console.log('---');
//     }
// }

// const arr1 = [100, 200, 300, 400];
// const cb1 = (num) => num + 1;

// console.log(arr1);
// changeArray(cb1, arr1);
// console.log(arr1);


// console.log('*** *** ***');

// const arr2 = ['Петр', 'Андрей', 'Сергей', 'Иван'];
// const cb2 = (name) => 'Имя: ' + name;

// console.log(arr2);
// changeArray(cb2, arr2);
// console.log(arr2);


// console.log('*** *** ***');

// const arr3 = [100, 555, 'Кирилл', 432, 101, 333];
// const cb3 = () => 'Кукуруза';
// changeArray(cb3, arr3);


// console.log(arr3);


// -----


// const makeChangedArray = (anyArray, callback) => {
//     const copyArray = [...anyArray];

//     for (let i = 0; i < copyArray.length; i += 1) {
//         console.log(copyArray[i]);
//         console.log(callback);
//         copyArray[i] = callback(copyArray[i]);
//         console.log(copyArray[i]);
//         console.log('---');
//     }

//     return copyArray;
// }


// -----


// const makeChangedArray = (anyArray, callback) => {
//     const copyArray = [...anyArray];

//     for (let i = 0; i < copyArray.length; i += 1) {
//         copyArray[i] = callback(copyArray[i]);
//     }

//     return copyArray;
// }

// const arr = [11, 12, 13, 14];
// // const cb = (num) => num + 10;
// const cb = (num) => {
//     return num + 10;
// };
// const result = makeChangedArray(arr, cb);

// console.log(arr);
// console.log(result);


// ----




const parentFunc = () => {
    const price = 2000;

    return () => {
        return price + 555;
    };
}





const result = parentFunc();
console.log(result());