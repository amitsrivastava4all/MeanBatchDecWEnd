const chalk = require("chalk");
const compute = require("computemodule");
console.log(chalk.green("Success result"));
console.log(chalk.red("Error Result"));
console.log(chalk.blue(compute.add(100,200)));