#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "paragraph",
        type: "input",
        message: "Enter your paragraph:",
    },
]);
const words = answer.paragraph.split(" ").filter(Boolean);
const wordsCount = words.length;
const lettersCount = answer.paragraph.replace(/\s+/g, "").length;
console.log(chalk.blue.bold("Total words:") + chalk.yellowBright(` ${wordsCount}`));
console.log(chalk.green.bold("Total letters", chalk.gray("(without counting whitespaces):")) + chalk.yellowBright(`${lettersCount}`));
