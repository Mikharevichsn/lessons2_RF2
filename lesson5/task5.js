// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать 
// методы для работы с балансом и историей транзакций.


/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],

    getRandomId() {
        return Math.round(Math.random() * 1000000);
    },
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        if (!Number.isInteger(amount)) return console.error('Ошибка! Некорректное число');
        // this.currentId = this.currentId + 1;

        const transaction = {
            id: this.getRandomId(),
            type,
            // type: type,
            amount,
            // amount: amount,
        }
        return transaction;
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        const depositTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
        console.log('depositTransaction = ', depositTransaction);
        if (!depositTransaction) return;

        // this.balance = this.balance + amount;
        this.balance += amount;

        this.transactions.push(depositTransaction);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        const withdrawTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
        if (!withdrawTransaction) return;

        if (amount > this.balance) return console.error('Недостаточно средств! Операция не выполнена');

        // this.balance = this.balance - amount;
        this.balance -= amount;

        this.transactions.push(withdrawTransaction);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        let foundedTransaction = null;

        for (let transac of this.transactions) {
            if (transac.id === id) {
                foundedTransaction = transac;
            }
        }

        return foundedTransaction;
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let sum = 0;

        for (let transac of this.transactions) {
            if (transac.type === type) {
                sum += transac.amount;
            }
        }

        return sum;
    },
  };



//   console.log(account.createTransaction(1000, Transaction.DEPOSIT));

console.log(account);
account.deposit(401);
account.deposit(402);
account.deposit(403);
account.deposit(404);
account.deposit(405);
account.withdraw(201);
account.withdraw(202);
account.withdraw(203);
account.withdraw(204);
account.withdraw(205);
account.withdraw(206);
account.withdraw(2000);
console.log(account);
console.log('---------');
// console.log(account.getBalance());

const currentBalance = account.getBalance();
console.log(currentBalance);

console.log(account.getTransactionDetails(10));


console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));


account.deposit('401');
account.withdraw('sdfsdfsdf');