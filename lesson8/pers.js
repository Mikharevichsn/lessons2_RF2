const pers = {
    money: 300,
    checkCanBye(price) {
        // console.log(this);
        return this.money >= price;
    },
    getHowManyCanBue(price) {
        if (price > this.money) return 0;
        return Math.floor(this.money / price);
    },
}

// console.log(pers.checkCanBye(1000));


const shop = [
    {name: 'Лук', ability: [], price: 500},
    {name: 'Стрела', damage: 5, price: 3},
    {name: 'Кинжал', damage: 13, price: 300},
];

const display = (checkPrice, getCount) => {
    let resStr = '';
    for (let item of shop) {
        const itemByeStr = checkPrice(item.price) ? `могу купить ${getCount(item.price)} штук` : `недостаточно золота`;
        resStr += `${item.name} ${itemByeStr}\n`;
    }
    return resStr;
}

const { checkCanBye, getHowManyCanBue } = pers;
console.log(display(checkCanBye.bind(pers), getHowManyCanBue.bind(pers)));