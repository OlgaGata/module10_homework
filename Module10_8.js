/*Задание 8.
Создайте произвольный массив Map.
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».*/

let arrayMap = new Map([["country","Spain"],
    ["community","Andalusia"],
    ["province","Malaga"],
    ["city","Torremolinos"]]);

/*for (let pair of arrayMap)
{
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}*/

for (let key of arrayMap.keys())
{
    console.log(`Ключ - ${key}, значение - ${arrayMap.get(key)}`);
}
