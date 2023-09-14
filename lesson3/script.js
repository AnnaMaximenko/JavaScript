// function helloName(name) {
//   console.log(name);
// }

// helloName("Alex");

// let count = 5;

// function counter() {
//   return count++;
// }

// counter();
// console.log(object);

// let age = Number(prompt("Сколько вам лет?"));

// // function upAge() {
// //   return age + 5;
// // }

// const lvlUpAge = () => {
//   return age + 5;
// };

// lvlUpAge();
// // console.log(`Через пять лет вам будет ${age}`);
// console.log(`Через пять лет вам будет ${lvlUpAge()}`);

// function hello() {
//   console.log("Hello");
// }

// hello();
// // функция ничего не возвращаетБ поэтому выбираем данный тип функции

// const sum = (param1, param2) => {
//   return param1 + param2;
// };
// // функция возвращает значение поэтому стрелочная

// const result = sum(2, 5);

// const salary = (money) => {
//   money = money * 0.87;
//   return money * 0.75;
// };
// const userMoney = Number(prompt("Сколько ты зарабатываешь?"));

// let moneyMonth = salary(userMoney);

// console.log(`Для расходов можно использовать: ${userMoney}`);
// console.log(`На еду можно потратить: ${userMoney * 0.3}`);

// sayHello();

// function sayHello() {
//   alert("Привет");
//   alert("Нажали на кнопку");
// }
// В данном виде функции нет разницы где указан вызов

// const hello2 = () => {
//   alert("Привет");
// };
// // не срабоатет пока не объявишь переменную ниже

// const userAnswer = prompt("Зимой и летом одним цветом");

// if (userAnswer === "елка") {
//   console.log("Угадал");
// } else {
//   console.log("Не угадал");
// }

function askQuestion(answer, question) {
  const userAnswer = prompt(question);
  if (userAnswer.toLowerCase === answer) {
    console.log("Угадал");
  } else {
    console.log("Не угадал");
  }
}

function puzzle() {
  askQuestion("елка", "Зимой и летом одним цветом");
  askQuestion("елка", "Зимой и летом одним цветом");
}
