// Напишите функцию savePassword(password) 
// которая принимает пароль и возвращает внутреннюю функцию, 
// которая принимает строку и возвращает буль true, 
// если строка совпадает с сохраненным паролем и false - если не совпадает.

const savePassword = (password) => {
    return (str) => {
        return str === password;
    }
}

const chechPassword = savePassword('admin');

console.log(chechPassword('dfssdfsdf'));
console.log(chechPassword('rrrr'));
console.log(chechPassword('eeee'));
console.log(chechPassword('wwww'));
console.log(chechPassword('admin'));