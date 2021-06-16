// Создайте объект calculator (калькулятор) с тремя методами:

// read(a, b)- запрашивает два значения и сохраняет их как свойства объекта.
// sum() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.


const calculator = {
    a: 0,
    b: 0,
    // read: () => {}
    read(a = 0, b = 0) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mult() {
        return this.a * this.b;
    }
};

console.log(calculator);
console.log(calculator.mult());

calculator.read();
console.log(calculator);
console.log(calculator.sum());

calculator.read(700, 30);
console.log(calculator.sum());


console.log(calculator.mult());