

const findMaxNumber = (numbers) => {
    let max = numbers[0];

    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}


console.log(findMaxNumber([1, 2, 3, 4, 5]));
console.log(findMaxNumber([10, 20, 30, 4, 5]));
console.log(findMaxNumber([10, 20, 30, 450, 5]));