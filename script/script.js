'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;                                  // Доход за месяц

let start = function() {
    do {
        money = prompt("Ваш месячный доход?", 1000);
    } while(!isNumber(money));
    money = +money;
};
start();

let appData = {
    income: {},                             // Дополнительный доход
    addIncome: [],
    expenses: {},                           // Обязательные расходы
    addExpenses: [],                        // Дополнительные расходы
    deposit: false,                         // Депозит в банке
    percentDeposit: 0,                      // Процент по депозиту
    moneyDeposit: 0,                        // На какую сумму открыт депозит
    mission: 2000,                          // Желаемая сумма накопления
    period: 12,                             // Период накопления
    budget: money,                          // Вся зарплата за месяц
    budgetDay: 0,                           // Дневной бюджет
    budgetMonth: 0,                         // Месячный бюджет
    expensesMonth: 0,
    // Пользовательский ввод:
    asking: function() {

        // Дополнительный источник дохода
        if(confirm("Есть ли у вас дополнительный источник заработка?")) {      
            let a = "Какой у вас есть дополнительный заработок?";
            let b = "Сколько в месяц зарабатываете на этом?";
            let itemIncome, cashIncome;
            do {
                itemIncome = prompt(a, "Фриланс");
                a = "Введите корректное название источника дополнительного заработка";
            } while (isFinite(itemIncome));

            do {
                cashIncome = prompt(b, 50);
                b = "Введите корректную сумму дополнительного заработка";
            } while (!isNumber(cashIncome));
            cashIncome = +cashIncome;
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Такси, кино, бензин");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        
        // Обязательные расходы:
        for (let i = 0; i < 2; i++) {
            let answerOne, answerTwo;
            let a = "Введите обязательную статью расходов?";
            do {
                answerOne = prompt(a);
                a = "Введите корректное название статьи обязательного расхода";
            } while (isFinite(answerOne));
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
    },

    // Ввод данных по депозиту
    getInfoDeposit: function() {
        if (appData.deposit) {
            let a = "Какой годовой процент?",
                b = "Какая сумма заложена?";
            do {
                appData.percentDeposit = prompt(a, "10");
                a = "Введите корректную сумму годового процента";
            } while (!isNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt(b, 100);
                b = "Введите корректную сумму вложенных денег";
            } while (!isNumber(appData.moneyDeposit));
        }
    },

    calcSavingMoney: function() {
        return appData.budgetMonth * appData.period;
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

for (let i = 0; i < appData.addExpenses.length; i++) {
    let b = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substring(1);
    appData.addExpenses[i] = b;
}

console.log(appData.addExpenses.join(", "));