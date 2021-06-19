// const arr = [100, 200, 300, 400];

// console.log(arr);

// console.log(...arr) // -> 100, 200, 300, 400
// console.log(222, 333, 444);

// const newArr = [...arr];
// console.log(newArr);

// -------------

// const numbers1 = [555, 444, 333, 222, 111];
// const numbers2 = [...numbers1];

// console.log(numbers1);
// console.log(numbers2);

// numbers2[0] = 777;
// console.log(numbers2);
// console.log(numbers1);

// -------------

// const obj1 = {name: 'Petr', age: 50};
// const obj2 = {...obj1};
// console.log(obj1)
// console.log(obj2)

// obj2.name = 'Andrey';
// console.log(obj2)
// console.log(obj1)

// -------------

const user = {
  name: 'Petr',
  login: 'petro777',
  age: 30,
  friends: ['Igor', 'Archi', 'Anna'],
};

// const { login: myVariable } = user;
// console.log(myVariable);

// const login = user.login;
// const name = user.name;
// const age = user.age;

// const { login, name, age } = user;

// console.log(login);
// console.log(name);
// console.log(age);


// проверьте есть ли у юзера друг Serjo
// есть есть - в консоль "такой друг есть"

// const checkFriend = (friendName) => {
//     const {friends} = user;
//     const result = friends.includes(friendName);
//     return result;
// }

// console.log(checkFriend('Serjo'));


/// ---------

// const response = {
//     user: {
//         name: 'sdfsdf',
//         lastName: 'sdfsdf'
//     }
// }


// const { user } = response;
// const user = response.user;
// const userData = response.user;
// const {user: userData} = response;

// ----

const arr = [1000, 2000];
// console.log(arr);

// const firstElement = arr[0];
// console.log(firstElement);

// const secondElement = arr[1];
// console.log(secondElement);

// const [firstElement, secondElement] = arr;
// console.log(firstElement);
// console.log(secondElement);


console.log(arr);
// const tmp = arr[0];
// arr[0] = arr[1];
// arr[1] = tmp;

[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr);