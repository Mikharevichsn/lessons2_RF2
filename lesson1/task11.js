// Написать программу которая получит от пользователя число (количество минут)
// и выведёт на экран строку в формате часов и минут.

// 60 -> 1:0
// 61 -> 1:1
// 180 -> 3:0

// 1) узнать количество часов -> записать в переменную (минуты разделить на 60)
// 2) количество часов округлить в меньшую сторону
// 3) узать количество минут (остаток от деления на 60)
// 4) выведёт на экран строку в формате часов и минут

// ---------
// const totalMinutes = 142;

// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// let hoursStr = String(hours);
// hoursStr = hoursStr.padStart(2, '0');

// const minutes = totalMinutes % 60;
// let minutesStr = String(minutes);
// minutesStr = minutesStr.padStart(2, '0');

// const result = `${hoursStr}:${minutesStr}`;
// console.log(result);
// ---------

const totalMinutes = 142;

const hours = Math.floor(totalMinutes / 60);
const hoursStr = String(hours).padStart(2, '0');

const minutes = totalMinutes % 60;
const minutesStr = String(minutes).padStart(2, '0');

const result = `${hoursStr}:${minutesStr}`;
console.log(result);
