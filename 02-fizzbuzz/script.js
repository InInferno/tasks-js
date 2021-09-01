/*
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(n) {
    let num;
    for(let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            num = 'fizzbuzz';
        } else if (i % 5 == 0) {
            num = 'buzz';
        } else if(i % 3 == 0) {
            num = 'fizz';
        } else {
            num = i;
        }
        console.log(num);
    }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(3));