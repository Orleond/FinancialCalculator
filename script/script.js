'use strict';

let money = 1000,                                   // Доход за месяц
    income = "Фриланс",                             // Дополнительный доход
    addExpenses = "Цветы, коммуналка, аренда",      // Дополнительные расходы
    deposit = false,                                // Депозит в банке
    mission = 2000,                                 // Желаемая сумма накопления
    period = 12,                                    // Период накопления
    budgetDay = money / 30;                         // Дневной бюджет

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(", ");
console.log(addExpenses);

// Вывод дневного бюджета в консоль
console.log("Дневной бюджет равен " + budgetDay + " рублей");

alert('Привет!');
console.log('Привет!');