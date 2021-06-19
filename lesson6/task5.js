// Пример 5 - напишите функцию
// которая принимает информацию о пользователе
// и выводит ее в консоль

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  obj: { a: 1, b: 2 },
};


// имя: [name], возраст: [age] .....

const printUser = (userObj) => {
    const { name, age, hobby, premium } = userObj;
    const { a, b } = userObj.obj;
    console.log(` имя: ${name}, возраст: ${age} хобби: ${hobby} премиум: ${premium} a: ${a} b: ${b}`)
}

printUser(user);