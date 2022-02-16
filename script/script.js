'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;                                  // Доход за месяц

let start = function() {
    do {
        money = +prompt("Ваш месячный доход?", 1000);
    } while(!isNumber(money));
};
start();

let appData = {
    income: {},                             // Дополнительный доход
    addIncome: [],
    expenses: {},                           // Обязательные расходы
    addExpenses: [],                        // Дополнительные расходы
    deposit: false,                         // Депозит в банке
    mission: 2000,                          // Желаемая сумма накопления
    period: 12,                             // Период накопления
    budget: money,                          // Вся зарплата за месяц
    budgetDay: 0,                           // Дневной бюджет
    budgetMonth: 0,                         // Месячный бюджет
    expensesMonth: 0,
    // Пользовательский ввод:
    asking: function() {
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Такси, кино, бензин");
        appData.addExpenses = addExpenses.toLowerCase().split(",");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        
        // Дополнительные расходы:
        for (let i = 0; i < 2; i++) {
            let answerOne, answerTwo;
            answerOne = prompt("Введите обязательную статью расходов?");
            do {
                answerTwo = +prompt("Во сколько это обойдется?", 100);
            } while(!isNumber(answerTwo));
            appData.expenses[answerOne] = answerTwo;
        }
    },

    // Сумма всех обязательных расходов
    getExpensesMonth: function() {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += appData.expenses[key];
        }

        appData.expensesMonth = sum;
    },

    // Накопления за месяц
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },    

    // Вычисление периода достижения цели
    getTargetMonth: function(){
        return Math.ceil(appData.mission / appData.budgetMonth);
    },
    
    // Определение уровня доходов
    getStatusIncome: function() {
        if (appData.budgetDay >= 100) {
            return "У вас высокий уровень дохода";
        } else if (appData.budgetDay >= 50) {
            return "У вас средний уровень дохода";
        } else if (appData.budgetDay >= 0) {
            return "К сожалению, у вас уровень дохода ниже среднего";
        } else {
            return "Что-то пошло не так";
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

// Вывод в консоль
console.log("Расходы за месяц составляют " + appData.expensesMonth + " рублей");
if (appData.getTargetMonth() >= 0) {
    console.log("Цель будет достигнута за " + appData.getTargetMonth() + " месяца(ев)");
} else {
    console.log("Цель не будет достигнута");
}
console.log(appData.getStatusIncome());


console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
    console.log(key + ": " + appData[key]);
}