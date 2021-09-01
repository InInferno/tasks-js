/*
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let arr = [];
    arr1.forEach((itemOne) => {
        arr2.forEach((itemTwo) => {
            if (itemOne == itemTwo && !arr.includes(itemOne)) {
                arr.push(itemOne);
            }
        })
    });
    return arr;
}

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []