// Написать фразу с помощью шаблонных строк Здравствуйте,
// меня зовут А, мне Б лет и мне нравится Ц,
// где А, Б, Ц - переменные вставленные в строку.

const name = 'Serjo';
const age = 15;
const hobby = 'спать';

// console.log(
//   `Здравствуйте, меня зовут ${name}, мне ${age} лет и мне нравится ${hobby}`
// );

const message = `Здравствуйте, меня зовут ${name}, мне ${age} лет и мне нравится ${hobby}`;
console.log(message);

// const message =
//   'Здравствуйте, меня зовут ' +
//   name +
//   ', мне ' +
//   age +
//   ' лет и мне нравится ' +
//   hobby;
// console.log(message);

// const text = `Сумма 5 + 10 = ${5 + 10}`;

// const myName = 'serjo';
// const text = `имя: ${myName.toUpperCase()}`;

const text = `тип 5 это ${typeof 5}`;
console.log(text);
