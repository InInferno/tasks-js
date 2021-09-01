/*
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let arr = str.split(' ');
    for(let i = 0; i <= arr.length - 1; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"