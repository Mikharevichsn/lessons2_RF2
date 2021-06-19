// Пример 6 - напишите функцию getObjectWithoutPropperty
// которая принимает объект, название свойства
// и возвращает копию объекта без этого свойства

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

//   const getObjectWithoutPropperty = (obj, proppertyName) => {
//     const objCopy = { ...obj };
//     delete objCopy[proppertyName];
//     return objCopy;
//   }

const getObjectWithoutPropperty = (obj, proppertyName) => {
    const { [proppertyName]: tmp, ...rest } = obj;
    return rest;
  }


  const resultObj = getObjectWithoutPropperty(user, 'premium');
  console.log(resultObj);