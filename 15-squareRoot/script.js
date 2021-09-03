/*
 *
 * Напишите однострочное решение, которое вычисляет сумму квадратных 
 * корней для всех чётных чисел целочисленного массива.
 * 
*/

function squareRoot(arr) {
    return arr.filter((item => !(item % 2))).reduce((acc, item) => acc + Math.sqrt(item), 0)
};

console.log(squareRoot([1, 4, 3, 0, 4, 5, 4])); // 6