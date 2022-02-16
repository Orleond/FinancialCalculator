'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,                                          // Доход за месяц
    income = "Фриланс",                             // Дополнительный доход
    addExpenses,                                    // Дополнительные расходы
    deposit,                                        // Депозит в банке
    mission = 2000,                                 // Желаемая сумма накопления
    period = 12,                                    // Период накопления
    budgetDay,                                      // Дневной бюджет
    expenses = [],                                  // Обязательные расходы
    accumulatedMonth,                               // Накопления за месяц
    expensesAmount;                                 // Сумма обязательных расходов

let start = function() {
    do {
        money = +prompt("Ваш месячный доход?", 1000);
    } while(!isNumber(money));
};
start();

// Определение типов данных переменных
let showTypeOf = function(data) {
    console.log(data, typeof data);
};

// Ввод данных

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Такси, кино, бензин");
deposit = confirm("Есть ли у вас депозит в банке?");

// Сумма всех обязательных расходов
let getExpensesMonth = function() {
    let sum = 0, a;

    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt("Введите обязательную статью расходов?");
        do {
            a = +prompt("Во сколько это обойдется?", 100);
        } while(!isNumber(a));
        sum += a;

    }

    console.log(expenses);
    return sum;
};
expensesAmount = getExpensesMonth();

// Накопления за месяц
let getAccumulatedMonth = function(money, expensesAmount) {
    return money - expensesAmount;
};
accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

// Вычисление периода достижения цели
let getTargetMonth = function(mission, accumulatedMonth){
    return Math.ceil(mission / accumulatedMonth);
};

// Определение уровня доходов
let getStatusIncome = function(budgetDay) {
    if (budgetDay >= 100) {
        return "У вас высокий уровень дохода";
    } else if (budgetDay >= 50) {
        return "У вас средний уровень дохода";
    } else if (budgetDay >= 0) {
        return "К сожалению, у вас уровень дохода ниже среднего";
    } else {
        return "Что-то пошло не так";
    }
};

// Вычисление дневного бюджета
budgetDay = Math.floor(accumulatedMonth / 30);

// Разбиение дополнительных расходов на массив
addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(",");

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Вывод в консоль
console.log("Расходы за месяц составляют " + expensesAmount + " рублей");
console.log("Возможные расходы - " + addExpenses);
if (getTargetMonth(mission, accumulatedMonth) >= 0) {
    console.log("Цель будет достигнута за " + getTargetMonth(mission, accumulatedMonth) + " месяца(ев)");
} else {
    console.log("Цель не будет достигнута");
}
console.log("Дневной бюджет равен " + budgetDay + " рублей");
console.log(getStatusIncome(budgetDay));
