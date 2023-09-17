// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// // 10 – четное число

// const array = [];

// function evenNumber(number) {
//   return number % 2 === 0;
// }

// for (let index = 0; index < 11; index++) {
//   array.push(index);
// }

// for (let index = 0; index < array.length; index++) {
//   if (index === 0) {
//     console.log(`${index} - это ноль`);
//   } else if (evenNumber(index)) {
//     console.log(`${index} - четное число`);
//   } else {
//     console.log(`${index} - нечетное число`);
//   }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
const generator = () => Math.ceil(Math.random() * (9 - 1) + 1);
for (let i = 0; i < 5; i++) {
  array[i] = generator();
}
console.log(array);

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log("Сумма: " + sum);

let min = array[0];

for (let i = 0; i < array.length; i++) {
  if (min > array[i]) {
    min = array[i];
  }
}

console.log("Минимумальное число: " + min);

let index = 0;

const isSerch = array.includes(3);
console.log(
  isSerch
    ? `Число 3 в заданном массиве присутствует`
    : `Число 3 в заданном массиве отсутствует`
);
