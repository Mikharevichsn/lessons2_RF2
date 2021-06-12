// Пример 6 - Коллекция курсов 
// (includes, indexOf, push и т. д.)
// Напишите функции для работы 
// с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое


const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
console.log(courses.toString());

const addCourse = (courseName) => {
    if (!courses.includes(courseName)) {
        courses.push(courseName);
        return true;
    }
    return console.error(`Ошибка! ${courseName} уже есть в списке`);
}

const removeCourse = courseName => {
    const index = courses.indexOf(courseName);
    if (index === -1) {
        return console.error(`${courseName} не найден в массиве. Удалить невозможно.`);
    }

    courses.splice(index, 1);
}

const updateCourse = (oldName, newName) => {
    const index = courses.indexOf(oldName);
    if (index === -1) {
        return console.error(`${oldName} не найден в массиве. Изменить невозможно.`);
    }

    courses.splice(index, 1, newName);
    // courses[index] = newName;
}




addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такое курс'
removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'
updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
updateCourse('Angular', 'NodeJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']


console.log(courses);