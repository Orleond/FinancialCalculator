'use strict';

let money,                                          // Доход за месяц
    income = "Фриланс",                             // Дополнительный доход
    addExpenses = "Цветы, коммуналка, аренда",      // Дополнительные расходы
    deposit = false,                                // Депозит в банке
    mission = 2000,                                 // Желаемая сумма накопления
    period = 12,                                    // Период накопления
    budgetDay,                                      // Дневной бюджет
    budgetMonth,                                    // Месячный бюджет
    expenses1,                                      // Обязательная статья расхода 1
    expenses2,                                      // Обязательная статья расхода 2
    amount1,                                        // Размер обязательного расхода 1
    amount2;                                        // Размер обязательного расхода 2

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(", ");
console.log(addExpenses);


alert('Привет!');
console.log('Привет!');

// Ввод данных
money = prompt("Ваш месячный доход?", 1000);
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Такси, кино, бензин");
deposit = confirm("Есть ли у вас депозит в банке?");
expenses1 = prompt("Введите обязательную статью расходов?", "Коммуналка");
amount1 = prompt("Во сколько это обойдется?", 100);
expenses2 = prompt("Введите обязательную статью расходов?", "Квартплата");
amount2 = prompt("Во сколько это обойдется?", 130);

// Вычисление месячного бюджета
budgetMonth = money - amount1 - amount2;

// Вычисление дневного бюджета
budgetDay = budgetMonth / 30;

// Вывод в консоль
console.log("Дневной бюджет равен " + budgetDay + " рублей");
console.log("Месячный бюджет равен " + budgetMonth + " рублей");
console.log("Цель будет достигнута за " + Math.ceil(mission / budgetMonth) + " месяца(ев)");

if (budgetDay >= 100) {
    console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 50) {
    console.log("У вас средний уровень дохода");
} else if (budgetDay >= 0) {
    console.log("К сожалению, у вас уровень дохода ниже среднего");
} else {
    console.log("Что-то пошло не так");
}