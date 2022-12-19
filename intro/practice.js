/*
Задание 1.

Напишите программу, которая работала бы следующим образом: в prompt вводится 
значение. С помощью унарного плюса (арифметический оператор) необходимо 
преобразовать его в число, затем проверить с помощью typeof, принадлежит ли 
оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную 
проверку для этого значения.*/
let num = prompt('Введите значение: ');

console.log(num);

if ((typeof(+num) == 'number') && (!isNaN(+num))) {
    if (num % 2 === 0) {
        console.log("четное");
    } else {
        console.log("нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись.");
}

/*
Задание 2.

Дана переменная x, которая может принимать любое значение. Написать программу, 
которая в зависимости от типа данных x выводит в консоль сообщение вида: 
«x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других
случаях выводите сообщение: «Тип x не определён».
Примечание: в этом задании использовать promt не нужно.
*/

let x;
if ((typeof(x) == 'number') && (!isNaN(x))) {
    console.log("Number");
} else if (typeof(x) == 'boolean') {
    console.log("Boolen");
} else if (typeof(x) == 'string') {
    console.log("String");
} else {
    console.log("Тип x не определен.");
}

/*
Задание 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".
*/
let str = "Hello";
let result = str.split('').reverse('').join('');

console.log(result);

/*
Задание 4

Записать в переменную случайное целое число в диапазоне [0; 100]. 
Используйте объект Math.
*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
getRandomIntInclusive(0, 100);

/*
Задание 5

Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива.
*/
var car = ['BMW', 'Volvo', 'Toyota', 'KIA', 'Cherry'];

console.log(car.length);
car.forEach(element => console.log(element));

/*
Задание 6

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат
 true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых 
 элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/
function similar(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) {
            return false;
        }
    }
    return true;
}
var arr = [3, 3, 4];
similar(arr);

/*
Задание 7

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в 
массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа,
но и, например, знаки, null и так далее.
*/
let countArr = [3, 6, 7, 5, 4, 3, null, 's', 'f'];
let evenNumbers = 0;
let oddNumbers = 0;
let otherValue = 0;

for (let i = 0; i < countArr.length; i++) {
    if ((countArr[i] === 0) || (typeof(countArr[i]) != 'number')) {
        otherValue++;
    } else {
        if (countArr[i] % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
}
console.log("Количество четных " + evenNumbers);
console.log("Количество нечетных " + oddNumbers);
console.log("Другие значения " + otherValue);

/*
Задание 8

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения 
в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.
*/
let map = new Map([
    ['firstname', 'Igor'],
    ['lastname', 'Ivanov'],
    ['profession', 'frontend']
]);

map.forEach(function(Y, X){
    console.log('X - ' + X + ', Y - ' + Y);
});