// const arr = [1000, 2000, 500, 'Serjo', true];

// console.log(arr);

// console.log(arr[3]);

// arr.push('Anna');
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(777);
// console.log(arr);

// arr.shift();
// console.log(arr);


// const nums = [111, 222, 333, 444, 555];

// console.log(nums);

// const newArr = nums.slice(2);
// console.log(newArr);

// const anotherArr = nums.slice(1, 3);
// console.log(anotherArr);

// const thirdArr = nums.slice(-2);
// console.log(thirdArr);



// const str = 'Мы писали мы писали, наши пальчики, устали';
// console.log(str);

// const words = str.split(',');
// console.log(words);



// const names = ['Serjo', 'Ivan', 'Anna', 'Andrew'];
// console.log(names);

// const str = names.join('<->');
// console.log(str);



const names = [ 'Kirill', 'Serjo', 'Ivan', 'Anna', 'Andrew'];
console.log(names);
if (names.includes('Serjo')) {
    const index = names.indexOf('Serjo');
    console.log(index);
    names[index] = 'SERJO';
}

console.log(names);





// function min(number) {
//     const myNumber = 1000 * number;
//     console.log(myNumber);
// }


// min(10);
// min(50);
// min(1000);
// min(500);
// min('Андрей');
// // min(10);
// // min(10);


function myFunc() {
    const arr = [];
    arr.push(500);
    return arr;
}

const result = myFunc();
console.log(result);


console.log(myFunc());