/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
Например, "Hello" -> "olleH".*/

let str = 'Hello, world!'
let newStr = '';
let i = str.length-1;
while (i >= 0)
{
    newStr += str[i];
    i--;
}
console.log("Inverted string: " + newStr);
