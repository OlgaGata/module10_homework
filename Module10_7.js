/*Задание 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа,
но и, например, знаки, null и так далее.*/

let array = [0,1,3,5,2,4,6,8,12,'ff','aa',null, '!',0,1777, '12fg'];
let evenElements = 0;
let oddElements = 0;
let zeroElements = 0;

for (let i = 0; i < array.length; i++)
{
    if ((typeof array[i] == 'number') && (array[i] == array[i]) )
    {
        if (array[i] === 0)
        {
            zeroElements++;
        }
        else if (array[i]%2 == 0) 
        {
            evenElements++;
        }
        else
        {
            oddElements++;
        }
    }
}
console.log("Lenght of array = ", array.length);
console.log("Quantity even elements of array = ", evenElements);
console.log("Quantity odd elements of array = ", oddElements);
console.log("Quantity zero elements of array = ", zeroElements);

// Всё верно, но условные операторы можно чуть упростить и убрать одну лишнюю вложенность. Выше исправила