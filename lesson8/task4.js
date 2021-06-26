// Напишите функцию для хранения скидки. 
// Функция возвращает другую функцию, 
// которая принимает сумму покупки и возвращает финальную сумму с сохранённой скидкой.

const saveDiscount = (discount) => {
    return (totalPrice) => {
        return totalPrice - totalPrice * (discount / 100);
    }
}


const getPriceGoldStatus = saveDiscount(30);
console.log(getPriceGoldStatus(1000));
console.log(getPriceGoldStatus(2000));
console.log(getPriceGoldStatus(3000));


const getPriceSilver = saveDiscount(20);
console.log(getPriceSilver(1000));
console.log(getPriceSilver(2000));


const getPriceOwner = saveDiscount(100);
console.log(getPriceOwner(1000));
console.log(getPriceOwner(2000));









