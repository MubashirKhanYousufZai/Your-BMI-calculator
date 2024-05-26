import inquirer from "inquirer";
import chalk from "chalk";
// printing welcome message
console.log(chalk.redBright("~ ".repeat(60)));
console.log(chalk.blueBright("\n \tWelcome to the BMI calculator by- Mubashir\n"));
console.log(chalk.redBright("~ ".repeat(60)));
//your current weight in kgs
let weightInkg = await inquirer.prompt([
    {
        name: "weight",
        type: "number",
        message: "Enter your weight in kgs"
    }
]);
//your current height in meter
let heightInmeter = await inquirer.prompt([
    {
        name: "height",
        type: "number",
        message: "Enter your height in meters"
    }
]);
// formula of bmi calcultor
let bmi = weightInkg.weight / (heightInmeter.height * heightInmeter.height);
console.log(chalk.blueBright(`\n \tYour BMI is ${bmi}\n`)); //result
// printing thanks massage
console.log(chalk.redBright("~ ".repeat(60)));
console.log(chalk.blueBright("\n \tThanks for using my BMI calculator\n"));
console.log(chalk.redBright("~ ".repeat(60)));
