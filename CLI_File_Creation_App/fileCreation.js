import readline from 'readline';
import chalk from 'chalk';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileCreation = () => {

        rl.question(chalk.blue.bold("Enter The File Name With Extension Name: "), (filename) => {
            rl.question(chalk.yellow.bold("Enter The Content Of the File: "), (content) => {
                fs.writeFile(filename, content, (err) => {
                    if (err) {
                        console.error(chalk.bgRed.white.bold(`Error While Writing The File: ${err.message}`));
                    } else {
                        console.log(chalk.green.bold(`File ${filename} created Successfully!`));
                    }
                    rl.close();
                });
            });
        });

};

fileCreation();

