// Вернуть отсортированную копию по алфавиту
// (не меняя исходный массив)

const arr =  ['Andrew', 'Tonny', 'Bill', 'Zorro', 'Karl', 'Aaa']; 

console.log(arr.toString());

// console.log(arr[0]);
// const tmp = arr[0];
// arr[0] = arr[1];
// arr[1] = tmp;
// console.log(arr);

for (let i = arr.length - 1; i > 0; i -= 1) {
    for (let k = 0; k < i; k += 1) {
        if (arr[k] > arr[k + 1]) {
            const tmp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = tmp;
        }
    }
}


console.log(arr);