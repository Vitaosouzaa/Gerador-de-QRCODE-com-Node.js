import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.yellow.bold("PASSWORD FOI GERADO!!"));
    const password = await handle();
    console.log(chalk.red.bold(password));
}

export default createPassword;