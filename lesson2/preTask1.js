// const money = 100;
// const price = 500;

// if (money >= price) {
//     console.log('Деняк достаточно!');
// } else {
//     console.log('Раотай дальше');
// }


// с 9 до 18 - учится
// с 19 до 22 - делает уроки
// с 23 до 8 утра - спит
// с 8 до 9 - бежит в универ

const time = 19;

if (time >= 9 && time <= 18) {
    console.log('Универ! Сиди учись!');
} else if (time >= 19 && time <= 22) {
    console.log('Делай уроки');
} else if ((time >= 23 && time <= 24) || (time >= 0 && time <= 7)) {
    console.log('Ложись спать!');
} else if (time === 8) {
    console.log('Беги в универ!');
} else {
    console.log('Ошибка! Непонятное значение!');
}


