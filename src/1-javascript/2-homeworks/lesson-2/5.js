/**
 * Задача 5.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, quantity) {
    //проверку на "не массив" не делаю, т.к. это входит в проверку на "не объект"
    if (!['number', 'string', 'object'].includes(typeof value)) {
        throw new Error('First argument must be either number or string or object');
    }
    if (typeof quantity !== 'number') {
        throw new Error('Second argument must be a number');
    }
    const array = [];
    for (let i = 0; i < quantity; i++) {
        array.push(value);
    }
    return array;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
