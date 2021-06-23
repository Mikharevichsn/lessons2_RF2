// Напишите две функции:

// makeProduct(name, price, callback) - принимает имя 
// и цену товара, а также колбек. 
// Функция создаёт обьект товара, 
// добавляя ему уникальный идентификатор в свойство id
// и вызывает колбек передавая ему созданный обьект.


// showProduct(product) - коллбек принимающий обьект 
// продукта и логирующий его в консоль

const showProduct = (obj) => {
    console.log(obj);
};

// showProduct({name: 'fff', age: 444});

const makeProduct = (name, price, callback) => {
    const product = {
        id: Math.round(Math.random() * 1000000),
        name,
        price,
    };

    callback(product);
}


makeProduct('Стул', 500, showProduct);
makeProduct('стол', 2000, showProduct);
makeProduct('Диван', 15000, showProduct);
