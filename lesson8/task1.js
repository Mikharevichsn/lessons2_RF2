//Напишите функцию each(array, callback), 
// которая первым параметром принимает массив, 
// а вторым - функцию, которая применится к каждому элементу массива. 
// Функция each должна вернуть новый массив, 
// элементами которого будут результаты вызова коллбека.

// const each = (array, callback) => {
//     const arrayCopy = [...array];

//     for (let i = 0; i < arrayCopy.length; i += 1) {
//         arrayCopy[i] = callback(arrayCopy[i]);
//     }

//     return arrayCopy;
// }

const each = (array, callback) => {
    const resultArr = [];

    for (let elem of array) {
        const curCallbackResult = callback(elem);
        resultArr.push(curCallbackResult);
    }

    return resultArr;
}


// console.log(each([64, 49, 36, 25, 16], element => element * 2));
// console.log(each([64, 49, 36, 25, 16], element => element - 1));
// console.log(each([64, 49, 36, 25, 16], element => element - 10));
// console.log(each([64, 49, 36, 25, 16], element => Math.sqrt(element)));
// console.log(each([1.5, 2.01, 16.4, 9.7, 11.3], element => Math.ceil(element)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], element => Math.floor(element)));