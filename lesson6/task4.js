// Пример 4 - используя Object entries
// и деструктуризацию напишите скрипт, который
// выводит содержимое объекта user в формате ключ:значение 

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };


//   const keys = Object.keys(user);

//   for (let key of keys) {
//       console.log(`${key}: ${user[key]}`);
//   }

// const keys = Object.keys(user);
// const values = Object.values(user);
const entries = Object.entries(user);

// console.log(keys);
// console.log(values);
// console.log(entries);

for (let entrie of entries) {
    // console.log(entrie);
    // console.log(entrie[0]);
    // console.log(entrie[1]);
    // console.log(`${entrie[0]}: ${entrie[1]}`);
    // ------
    // const key = entrie[0];
    // const value = entrie[1];
    // console.log(`${key}: ${value}`);
    // -----
    const [key, value] = entrie;
    console.log(`${key}: ${value}`);
}

console.log('--------');

for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}