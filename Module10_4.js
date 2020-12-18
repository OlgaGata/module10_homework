/*Задание 4.
Записать в переменную случайное целое число в диапазоне [0; 100].
Используйте объект Math.*/

let x = 0;
let min = 1;
let max = 100;

x = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random integer in range [1,100] is " + x);