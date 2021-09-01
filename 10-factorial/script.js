/*
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1);

        // let counter = 1;
    // if(n <= 1) {
    //     return counter;
    // }
    // for (let i = 1; i <= n; i++) {
    //     counter *= i;
    // }
    // return counter;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720