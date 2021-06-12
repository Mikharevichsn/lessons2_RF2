// Напиши функцию calculateAverage()
//которая принимает произвольное кол-во аргументов
//и возвращает их среднее значение.
//Все аругменты будут только числами.


const calculateAverage = function () {
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }

    const avarage = sum / arguments.length;
    // const avarage = Math.round(sum / arguments.length);
    return avarage;
}


console.log(calculateAverage(100, 200, 300, 400));
console.log(calculateAverage(10, 10, 10, 10));
console.log(calculateAverage(123, 144, 157, 181));