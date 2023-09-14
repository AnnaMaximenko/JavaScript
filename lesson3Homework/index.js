// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const number = 2;

const cube = (number) => {
  return Math.pow(number, 3);
};

// console.log(cube(number));
// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let salary = prompt("Введите вашу зарплату?");

function chekingNumber(number) {
  if (Number.isFinite(number) === true) {
    return true;
  } else {
    return false;
  }
}
const tax = (number) => {
  return number * 0.87;
};

function salaryAmount() {
  chekingNumber(salary) === true
    ? console.log(tax(salary))
    : console.log("Введен неверный тип данных");
}
salaryAmount();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let first = prompt("Введите первое число?");
let second = prompt("Введите первое число?");
let third = prompt("Введите первое число?");

function findMax(first, second, third) {
  return Math.max(first, second, third);
}
console.log(findMax(first, second, third));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let one = 1;
let two = 10;

const sum = (one, two) => {
  return one + two;
};

const diff = (one, two) => {
  return one < two ? two - one : one - two;
};

const mult = (one, two) => {
  return one * two;
};

const del = (one, two) => {
  return one / two;
};

// console.log(sum(one, two));
// console.log(diff(one, two));
// console.log(mult(one, two));
// console.log(del(one, two));
console.log(
  `Результат вычислений: \nCумма: ${sum(one, two)}\nРазность: ${diff(
    one,
    two
  )}\nУмножение: ${mult(one, two)} \nДеление: ${del(one, two)}`
);
