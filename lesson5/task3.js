// Напишите ф-цию calcTotalPrice(stones, stoneName), 
// которая принимает массив обьектов и строку с названием камня. 
// Ф-ция считает и возвращает общую стоимость камней с таким именем, 
// ценой и количеством из обьекта


const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

console.log(stones);

const calcTotalPrice = (stonesArr, stoneName) => {
    let searchResult = null;

    for (let stone of stonesArr) {
        if (stone.name === stoneName) {
            searchResult = stone;
        }
    }

    if (searchResult === null) {
        return 'Камень не найден';
    } 

    return searchResult.price * searchResult.quantity;
}


console.log(calcTotalPrice(stones, 'Бриллиант'));
