// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = prompt("Введите num1: ");
const num2 = prompt("Введите num2: ");

alert(
  num1 <= 1 ? "Переменная num1 равна или меньше 1" : " Переменная num1 больше 1"
);
alert(
  num2 >= 3 ? "Переменная num1 равна или меньше 3" : " Переменная num1 больше 3"
);

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
//   console.log("+++");
// } else {
//   console.log("---");
// }
let test = true;
test === true ? console.log("+++") : console.log("---");

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 2244;

if ((day >= 1) & (day < 11)) {
  console.log("Первая декада");
} else if ((day >= 11) & (day < 21)) {
  console.log("Вторая декада");
} else if ((day >= 21) & (day <= 31)) {
  console.log("Третья декада");
} else {
  console.log("Неправильно введено число");
}
