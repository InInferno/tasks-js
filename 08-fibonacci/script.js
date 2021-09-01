/*
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let arr = [0, 1, 1];
    if(n < 3) {
        return arr[n - 1]
    }
    for(let i = 3; i <= n - 1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[arr.length - 1];
}

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)