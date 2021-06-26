const hunter = {
    money: 300,
}

const knight ={
    money: 100,
}

// console.log(hunter.checkCanBye(1000));


const shop = [
    {name: 'Лук', ability: [], price: 500},
    {name: 'Стрела', damage: 5, price: 3},
    {name: 'Кинжал', damage: 13, price: 300},
];

function checkCanBye(price) {
    // console.log(this);
    return this.money >= price;
};

function getHowManyCanBue(price) {
    if (price > this.money) return 0;
    return Math.floor(this.money / price);
}


const display = (pers) => {
    let resStr = '';
    for (let item of shop) {
        const itemByeStr = checkCanBye.call(pers, item.price) ? `могу купить ${getHowManyCanBue.call(pers, item.price)} штук` : `недостаточно золота`;
        resStr += `${item.name} ${itemByeStr}\n`;
    }
    return resStr;
}

console.log(display(hunter));
console.log(display(knight));