'use strict';

let money,                                          // Доход за месяц
    income = "Фриланс",                             // Дополнительный доход
    addExpenses,                                    // Дополнительные расходы
    deposit,                                        // Депозит в банке
    mission = 2000,                                 // Желаемая сумма накопления
    period = 12,                                    // Период накопления
    budgetDay,                                      // Дневной бюджет
    expenses1,                                      // Обязательная статья расхода 1
    expenses2,                                      // Обязательная статья расхода 2
    amount1,                                        // Размер обязательного расхода 1
    amount2,                                        // Размер обязательного расхода 2
    accumulatedMonth;                               // Накопления за месяц

// Определение типов данных переменных
let showTypeOf = function(data) {
    console.log(data, typeof data);
};

// Ввод данных
money = prompt("Ваш месячный доход?", 1000);
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Такси, кино, бензин");
deposit = confirm("Есть ли у вас депозит в банке?");
expenses1 = prompt("Введите обязательную статью расходов?", "Коммуналка");
amount1 = prompt("Во сколько это обойдется?", 100);
expenses2 = prompt("Введите обязательную статью расходов?", "Квартплата");
amount2 = prompt("Во сколько это обойдется?", 130);


// Сумма всех обязательных расходов
let getExpensesMonth = function(amount1, amount2) {
    return amount1 + amount2;
};

// Накопления за месяц
let getAccumulatedMonth = function(money, amount1, amount2) {
    return money - amount1 - amount2;
};
accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

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
addExpenses = addExpenses.split(", ");

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Вывод в консоль
console.log("Расходы за месяц составляют " + getExpensesMonth(amount1, amount2) + " рублей");
console.log("Возможные расходы - " + addExpenses);
console.log("Цель будет достигнута за " + getTargetMonth(mission, accumulatedMonth) + " месяца(ев)");
console.log("Дневной бюджет равен " + budgetDay + " рублей");
console.log(getStatusIncome(budgetDay));
