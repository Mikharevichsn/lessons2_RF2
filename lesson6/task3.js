// Пример 3 перепешите функцию сортировки
// с использованием деструктуризации
// для перестановки элементов

const sortByName = (arr) => {
    const arrCopy = [...arr];
    for (let i = arrCopy.length - 1; i > 0; i -= 1) {
        for (let k = 0; k < i; k += 1) {
            if (arrCopy[k] > arrCopy[k + 1]) {
                // const tmp = arrCopy[k];
                // arrCopy[k] = arrCopy[k + 1];
                // arrCopy[k + 1] = tmp;
                [arrCopy[k], arrCopy[k + 1]] = [arrCopy[k + 1], arrCopy[k]];
            }
        }
    }
    
    return arrCopy;
}

const arrNotSorted = ['Ivan', 'Petr', 'Serjo', 'Kris', 'Jack', 'Anna'];

console.log(arrNotSorted);

const arrSorted = sortByName(arrNotSorted);

console.log(arrSorted);
console.log(arrNotSorted);