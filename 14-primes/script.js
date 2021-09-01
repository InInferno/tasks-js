/*
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
  let ans = [];
  for (let i = 2; i <= num; i++) {
    let count = 1;
    if (i > 2 && i % 2 != 0) {
      for (let j = 3; j * j <= i ; j = j + 2) {
        if (i % j == 0) {
          count = 0;
          break;
        }
      }
    }
    else if (i != 2) count = 0;
    if (count == 1) ans.push(i)
  }
  return ans;
};

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]