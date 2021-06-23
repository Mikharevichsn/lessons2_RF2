// Выполните рефакторинг функции 
// makeDishWithShef(shefName, dish) так, 
// чтобы не нужно было каждый раз передавать имя шефа. 
// Напишите функцию makeShef(shefName), 
// которая возвращает другую функцию makeDish(dish), 
// помнящую имя шефа при её вызове.

function makeDishWithShef(shefName, dish) {
    console.log(`Шеф ${shefName} готовит ${dish}`);
}

// const makeShef = (shefName) => {
//     const makeDish = (dish) => {
//         console.log(`Шеф ${shefName} готовит ${dish}`);
//     }
//     return makeDish;
// }

const makeShef = (shefName) => {
    return (dish) => {
        console.log(`Шеф ${shefName} готовит ${dish}`);
    }
}


const makeDish = makeShef('Гордон Рамзи');


makeDish('Ризотто');
makeDish('Салат');
makeDish('Курица');