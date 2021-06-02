// Что выведет код?

// И
//будет тру только если все тру
//a && b && c // выдаст значение последнего если все переменные приравняются к true
// если хоть 1 ложь - сломается об лож, вернет этот ложный элемент и дальше не пойдет

// ИЛИ
// вернет первую попавшуюся истину
// вернет последний ложный, если ВСЕ ложь

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'hello');
// console.log(true && 0 && 'hello');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);
