/*
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
    let count = 0;
    if(n == 0) return count;
    for(let i = 1; i <= n; i++) {
        i.toString().split('').forEach(item => {
            if (item == '0') count++
        });
    }
    return count;
}

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100