// Напишите функцию makeCounter(), 
// которая возвращает другую функцию, 
// которая считает и логирует количество своих вызовов.

// let counter = 0;
// const launchCounter = () => {
//     counter += 1;
//     console.log(counter);
// }


const createCounter = () => {
    let counter = 0;
    return () => {
        counter += 1;
        console.log(counter);
    }
}

const launchCounter = createCounter();

launchCounter();
launchCounter();
launchCounter();
launchCounter();
launchCounter();
launchCounter();







