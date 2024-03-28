#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number"
    },
]);
// 12345 === 1234
if ("pinAnswer.pin === myPin") {
    console.log("correct pin code!!!");
}
let operation = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", " check balance",]
    },
]);
if ("operationAns.operation=== withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    // =, -=, assignmrnt operators
    myBalance -= amountAns.amount;
    console.log("your remaining balance is: " + myBalance);
}
else if (operation.operation === "check balannce ") {
    console.log("your balance is : " + myBalance);
    console.log("Incorrect pin number");
}
else {
    console.log("Incorrect pin number");
}
