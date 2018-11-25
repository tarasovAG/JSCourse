'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: null,
    income: [],
    savings: false
};

let expenseName = prompt("Введите обязательную статью расходов в этом месяце", "ЖКУ");
let expenseValue = +prompt("Во сколько обойдется?", "3000");
appData.expenses[expenseName] = expenseValue;
alert("Бюджет на 1 день = " + (appData.budget - appData.expenses[expenseName]) / 30 + " руб.");