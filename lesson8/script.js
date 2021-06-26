// // const arr = ['Petr', 'Archy', 'Serjo', 'Kris', 'Jack'];

// // for (let name of arr) {
// //     console.log(name);
// //     const curNameIndex = arr.indexOf(name);
// //     console.log(curNameIndex);
// // }


// const arr = [{name: 'Petr'}, {name: 'Serjo'}, {name: 'Archy'}, {name: 'Kris'}, {name: 'Jack'}, {name: 'Serjo'}];

// // const curNameIndex = arr.findIndex((el) => el.name === 'Serjo');
// // console.log(curNameIndex);
// const result = arr.find((el) => el.name === 'Serjo');
// console.log(result);

// // for (let obj of arr) {
// //     console.log(obj);
// //     // const curNameIndex = arr.indexOf(obj);

// // }



// -----

// scope chaining
const a = 1000;

const func = () => {
    const a = 2000;
    return () => {
        const a = 3000;
        console.log(a);
    }
}


func()();