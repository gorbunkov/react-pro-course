/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// РЕШЕНИЕ

function f(...args) {
    return args.reduce((previous, current) => {
        if (typeof previous !== 'number' || typeof current !== 'number') {
            throw new Error('All arguments must be numbers');
        }
        return previous + current;
    });
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
