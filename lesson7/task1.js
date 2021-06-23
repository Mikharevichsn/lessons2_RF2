// Напишите две функции:

// letMeSeeYourName(callback) - спрашивает имя пользователя 
// через prompt и вызывает коллбек ф-цию callback


// greet(name) - коллбек принимающий имя 
//и логирующий в консоль строку "Привет" + name


const greet = (name) => {
    console.log(`Привет ${name}`);
}

// greet('Сергей')
// greet('Никита')
// greet()

const letMeSeeYourName = (callback) => {
    const userName = prompt('Введите имя');
    callback(userName);
}

letMeSeeYourName(greet);
