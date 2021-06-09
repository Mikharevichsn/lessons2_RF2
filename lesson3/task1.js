/*
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». 
Код для замены значения в середине должен работать для массива любой длины.
Удалите первый элемент и выведите его в консоль.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

const styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

const index = Math.floor(styles.length / 2);
styles[index] = 'Классика';
console.log(styles);

const removed = styles.shift();
console.log(removed);

console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);