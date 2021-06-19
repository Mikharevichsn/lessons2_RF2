// Пример 1 SPREAD
// Напиши функцию, которая принимает массив чисел
// и находит минимальное

const findMin = (numbers) => {
    const min = Math.min(...numbers);
    return min;
}


const arr = [1, 2, -3, 4, 5, -100];

console.log(findMin(arr));
console.log(findMin([1, 2, -3, 4, 5, -100]));